import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import { getAttribution, originLabel } from "@/lib/tracking";

const interesses = [
  "Gestão de ativos e equipamentos",
  "Jornada e segurança do paciente",
  "Higienização e limpeza (Newcheck)",
  "Monitoramento de ambientes",
  "Ainda não sei, quero entender",
];

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function LeadForm() {
  const send = useServerFn(submitLead);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const attribution = getAttribution();

    if (!form.get("consentimento")) {
      setError("É necessário aceitar a Política de Privacidade.");
      return;
    }

    setLoading(true);
    try {
      await send({
        data: {
          nome: String(form.get("nome") ?? ""),
          empresa: String(form.get("empresa") ?? ""),
          cargo: String(form.get("cargo") ?? "") || undefined,
          email: String(form.get("email") ?? ""),
          whatsapp: String(form.get("whatsapp") ?? ""),
          interesse: String(form.get("interesse") ?? "") || undefined,
          consentimento: true as const,
          website: String(form.get("website") ?? "") || undefined,
          ...attribution,
          origem: originLabel(attribution),
        },
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-gold/40 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden />
        <h3 className="mt-4 text-2xl font-extrabold text-foreground">Recebemos seu contato</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Nosso time de especialistas em saúde retorna em até 1 dia útil pelo WhatsApp ou e-mail informado.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 shadow-lg sm:p-8">
      <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl">
        Agende um diagnóstico gratuito
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Mostramos, com dados da sua operação, onde a sensorização gera ganho imediato.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">Nome*</span>
            <input name="nome" required minLength={2} maxLength={120} className={fieldClass} placeholder="Seu nome" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">Hospital / empresa*</span>
            <input name="empresa" required minLength={2} maxLength={160} className={fieldClass} placeholder="Instituição" />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">Cargo</span>
            <input name="cargo" maxLength={120} className={fieldClass} placeholder="Ex.: Diretor de Operações" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">E-mail corporativo*</span>
            <input name="email" type="email" required maxLength={200} className={fieldClass} placeholder="nome@instituicao.com.br" />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">WhatsApp*</span>
            <input
              name="whatsapp"
              required
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
              className={fieldClass}
              placeholder="(11) 99999-9999"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-foreground">Interesse principal</span>
            <select name="interesse" defaultValue="" className={fieldClass}>
              <option value="">Selecione</option>
              {interesses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="consentimento" className="mt-1 size-4 shrink-0 accent-[var(--gold)]" />
          <span>
            Autorizo o contato da NYX Tecnologia e o tratamento dos meus dados conforme a{" "}
            <Link to="/politica-de-privacidade" className="font-semibold text-foreground underline underline-offset-2">
              Política de Privacidade
            </Link>{" "}
            (LGPD).
          </span>
        </label>

        {error ? (
          <p role="alert" className="rounded-sm border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
          {loading ? "Enviando..." : "Quero meu diagnóstico"}
        </button>
      </div>
    </form>
  );
}
