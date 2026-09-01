import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

const attributionSchema = z.object({
  session_id: z.string().max(120).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  gclid: z.string().max(300).optional(),
  fbclid: z.string().max(300).optional(),
  referrer: z.string().max(500).optional(),
  device_type: z.string().max(30).optional(),
  origem: z.string().max(60).optional(),
});

const leadSchema = attributionSchema.extend({
  nome: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(2).max(160),
  cargo: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(200),
  whatsapp: z.string().trim().min(10).max(30),
  interesse: z.string().trim().max(120).optional(),
  consentimento: z.literal(true),
  website: z.string().max(200).optional(), // honeypot
});

const visitSchema = attributionSchema.extend({
  session_id: z.string().min(4).max(120),
  landing_page: z.string().max(200).default("/"),
});

// Simple in-memory rate limit per IP (best effort on a single worker instance).
const hits = new Map<string, number[]>();
function rateLimited(ip: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > max;
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (rateLimited(ip)) {
      throw new Error("Muitas tentativas. Tente novamente em alguns instantes.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      nome: data.nome,
      empresa: data.empresa,
      cargo: data.cargo ?? null,
      email: data.email.toLowerCase(),
      whatsapp: data.whatsapp,
      interesse: data.interesse ?? null,
      consentimento: true,
      origem: data.origem ?? "Direto",
      session_id: data.session_id ?? null,
      utm_source: data.utm_source ?? null,
      utm_medium: data.utm_medium ?? null,
      utm_campaign: data.utm_campaign ?? null,
      utm_content: data.utm_content ?? null,
      utm_term: data.utm_term ?? null,
      gclid: data.gclid ?? null,
      fbclid: data.fbclid ?? null,
      referrer: data.referrer ?? null,
      device_type: data.device_type ?? null,
    });

    if (error) {
      console.error("[submitLead]", error.message);
      throw new Error("Não foi possível enviar seus dados agora. Tente novamente.");
    }

    return { ok: true };
  });

export const trackVisit = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => visitSchema.parse(data))
  .handler(async ({ data }) => {
    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (rateLimited(`visit:${ip}`, 40)) return { ok: false };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("landing_page_visits").insert({
      session_id: data.session_id,
      landing_page: data.landing_page,
      utm_source: data.utm_source ?? null,
      utm_medium: data.utm_medium ?? null,
      utm_campaign: data.utm_campaign ?? null,
      utm_content: data.utm_content ?? null,
      utm_term: data.utm_term ?? null,
      referrer: data.referrer ?? null,
      device_type: data.device_type ?? null,
    });
    if (error) console.error("[trackVisit]", error.message);
    return { ok: !error };
  });
