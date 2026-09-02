import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import { Loader2, LogOut, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getAdminOverview, updateLeadStatus, type LeadStatus } from "@/lib/admin.functions";
import { img } from "@/lib/assets";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel administrativo — nyx Tecnologia" },
      { name: "description", content: "Métricas de acesso e gestão de leads da landing page da nyx." },
      { property: "og:title", content: "Painel administrativo — nyx Tecnologia" },
      { property: "og:description", content: "Métricas de acesso e gestão de leads da landing page da nyx." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  ssr: false,
  component: AdminPage,
});

const statusLabels: Record<LeadStatus, string> = {
  novo: "Novo",
  contato_iniciado: "Contato iniciado",
  reuniao_agendada: "Reunião agendada",
  qualificado: "Qualificado",
  oportunidade: "Oportunidade",
  sem_interesse: "Sem interesse",
};

type Lead = {
  id: string;
  nome: string;
  empresa: string;
  cargo: string | null;
  email: string;
  whatsapp: string;
  interesse: string | null;
  status: LeadStatus;
  origem: string;
  utm_campaign: string | null;
  device_type: string | null;
  created_at: string;
};

type Visit = {
  id: string;
  session_id: string;
  utm_source: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  device_type: string | null;
  created_at: string;
};

function useSessionReady() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) void navigate({ to: "/auth", replace: true });
      else setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) void navigate({ to: "/auth", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  return ready;
}

function AdminPage() {
  const ready = useSessionReady();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchOverview = useServerFn(getAdminOverview);
  const setStatus = useServerFn(updateLeadStatus);
  const [range, setRange] = useState<7 | 30 | 90>(30);

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["admin-overview"],
    queryFn: () => fetchOverview({ data: undefined }),
    enabled: ready,
  });

  const leads = (data?.leads ?? []) as Lead[];
  const visits = (data?.visits ?? []) as Visit[];

  const since = useMemo(() => Date.now() - range * 24 * 60 * 60 * 1000, [range]);
  const visitsInRange = visits.filter((v) => new Date(v.created_at).getTime() >= since);
  const leadsInRange = leads.filter((l) => new Date(l.created_at).getTime() >= since);
  const uniqueSessions = new Set(visitsInRange.map((v) => v.session_id)).size;
  const conversion = uniqueSessions ? (leadsInRange.length / uniqueSessions) * 100 : 0;

  const byOrigin = useMemo(() => {
    const map = new Map<string, number>();
    for (const lead of leadsInRange) map.set(lead.origem, (map.get(lead.origem) ?? 0) + 1);
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [leadsInRange]);

  const byDevice = useMemo(() => {
    const map = new Map<string, number>();
    for (const visit of visitsInRange) {
      const key = visit.device_type ?? "desconhecido";
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [visitsInRange]);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    void navigate({ to: "/auth", replace: true });
  }

  async function changeStatus(id: string, status: LeadStatus) {
    await setStatus({ data: { id, status } });
    await refetch();
  }

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mist">
        <Loader2 className="size-6 animate-spin text-graphite" aria-hidden />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <header className="bg-navy-deep text-navy-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <img src={img.logoNyxBranco} alt="nyx Tecnologia" className="h-7 w-auto shrink-0" />
            <h1 className="truncate text-lg font-extrabold">Painel de leads</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => void refetch()}
              className="rounded-sm border border-white/20 p-2"
              aria-label="Atualizar dados"
            >
              <RefreshCw className={`size-4 ${isFetching ? "animate-spin" : ""}`} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => void signOut()}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground"
            >
              <LogOut className="size-4" aria-hidden /> Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {([7, 30, 90] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRange(option)}
              className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
                range === option ? "border-navy bg-navy text-navy-foreground" : "border-border bg-background text-graphite"
              }`}
            >
              {option} dias
            </button>
          ))}
        </div>

        {error ? (
          <p role="alert" className="mt-6 rounded-sm border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            {error instanceof Error ? error.message : "Erro ao carregar os dados."}
          </p>
        ) : null}

        {isLoading ? (
          <p className="mt-8 text-sm text-graphite">Carregando dados...</p>
        ) : (
          <>
            <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Acessos", valor: visitsInRange.length },
                { label: "Sessões únicas", valor: uniqueSessions },
                { label: "Leads", valor: leadsInRange.length },
                { label: "Conversão", valor: `${conversion.toFixed(1)}%` },
              ].map((card) => (
                <div key={card.label} className="border-t-2 border-gold bg-background p-5">
                  <p className="text-sm text-graphite">{card.label}</p>
                  <p className="mt-2 text-3xl font-extrabold text-foreground">{card.valor}</p>
                </div>
              ))}
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="bg-background p-6">
                <h2 className="text-lg font-extrabold text-foreground">Leads por origem</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {byOrigin.length === 0 ? <li className="text-graphite">Sem dados no período.</li> : null}
                  {byOrigin.map(([origem, total]) => (
                    <li key={origem} className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-foreground">{origem}</span>
                      <span className="font-bold text-navy">{total}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-6">
                <h2 className="text-lg font-extrabold text-foreground">Acessos por dispositivo</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {byDevice.length === 0 ? <li className="text-graphite">Sem dados no período.</li> : null}
                  {byDevice.map(([device, total]) => (
                    <li key={device} className="flex items-center justify-between border-b border-border pb-2">
                      <span className="capitalize text-foreground">{device}</span>
                      <span className="font-bold text-navy">{total}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-8 bg-background p-6">
              <h2 className="text-lg font-extrabold text-foreground">Leads recebidos</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-graphite">
                      <th className="py-2 pr-4 font-semibold">Data</th>
                      <th className="py-2 pr-4 font-semibold">Nome</th>
                      <th className="py-2 pr-4 font-semibold">Empresa</th>
                      <th className="py-2 pr-4 font-semibold">Contato</th>
                      <th className="py-2 pr-4 font-semibold">Interesse</th>
                      <th className="py-2 pr-4 font-semibold">Origem</th>
                      <th className="py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsInRange.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-6 text-graphite">
                          Nenhum lead no período selecionado.
                        </td>
                      </tr>
                    ) : null}
                    {leadsInRange.map((lead) => (
                      <tr key={lead.id} className="border-b border-border align-top">
                        <td className="py-3 pr-4 text-graphite">
                          {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="py-3 pr-4 font-semibold text-foreground">
                          {lead.nome}
                          {lead.cargo ? <span className="block text-xs text-graphite">{lead.cargo}</span> : null}
                        </td>
                        <td className="py-3 pr-4 text-foreground">{lead.empresa}</td>
                        <td className="py-3 pr-4 text-graphite">
                          <a href={`mailto:${lead.email}`} className="block hover:text-foreground">
                            {lead.email}
                          </a>
                          <a
                            href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="block hover:text-foreground"
                          >
                            {lead.whatsapp}
                          </a>
                        </td>
                        <td className="py-3 pr-4 text-graphite">{lead.interesse ?? "—"}</td>
                        <td className="py-3 pr-4 text-graphite">
                          {lead.origem}
                          {lead.utm_campaign ? (
                            <span className="block text-xs">{lead.utm_campaign}</span>
                          ) : null}
                        </td>
                        <td className="py-3">
                          <select
                            value={lead.status}
                            onChange={(e) => void changeStatus(lead.id, e.target.value as LeadStatus)}
                            className="rounded-sm border border-input bg-background px-2 py-1.5 text-sm"
                          >
                            {Object.entries(statusLabels).map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        <Link to="/" className="mt-8 inline-block text-sm text-graphite hover:text-foreground">
          ← Ver landing page
        </Link>
      </main>
    </div>
  );
}
