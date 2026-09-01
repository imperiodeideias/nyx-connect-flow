import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const statusValues = [
  "novo",
  "contato_iniciado",
  "reuniao_agendada",
  "qualificado",
  "oportunidade",
  "sem_interesse",
] as const;

export type LeadStatus = (typeof statusValues)[number];

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("Acesso restrito a administradores.");
}

export const getAdminOverview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context as never);
    const supabase = context.supabase;

    const [{ data: visits }, { data: leads }] = await Promise.all([
      supabase
        .from("landing_page_visits")
        .select("id, session_id, utm_source, utm_medium, utm_campaign, referrer, device_type, created_at")
        .order("created_at", { ascending: false })
        .limit(5000),
      supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1000),
    ]);

    return { visits: visits ?? [], leads: leads ?? [] };
  });

export const updateLeadStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(statusValues) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { error } = await context.supabase
      .from("leads")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const addLeadNote = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z.object({ lead_id: z.string().uuid(), nota: z.string().trim().min(1).max(2000) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { error } = await context.supabase
      .from("lead_notes")
      .insert({ lead_id: data.lead_id, nota: data.nota, author_id: context.userId });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listLeadNotes = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ lead_id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { data: notes } = await context.supabase
      .from("lead_notes")
      .select("id, nota, created_at")
      .eq("lead_id", data.lead_id)
      .order("created_at", { ascending: false });
    return notes ?? [];
  });
