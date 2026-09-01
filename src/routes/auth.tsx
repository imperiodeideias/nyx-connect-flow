import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { img } from "@/lib/assets";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acesso restrito — NYX Tecnologia" },
      { name: "description", content: "Área administrativa da landing page da NYX Tecnologia." },
      { property: "og:title", content: "Acesso restrito — NYX Tecnologia" },
      { property: "og:description", content: "Área administrativa da landing page da NYX Tecnologia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  ssr: false,
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) void navigate({ to: "/admin", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) void navigate({ to: "/admin", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    setLoading(true);
    try {
      if (mode === "login") {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
      } else {
        const { data, error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (err) throw err;
        if (!data.session) setMessage("Confira seu e-mail para confirmar a conta antes de entrar.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível autenticar.");
    } finally {
      setLoading(false);
    }
  }

  async function signInWithGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("Não foi possível entrar com o Google.");
      return;
    }
    if (result.redirected) return;
    void navigate({ to: "/admin", replace: true });
  }

  const fieldClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-deep px-5 py-16">
      <div className="w-full max-w-md">
        <img src={img.logoNyxBranco} alt="NYX Tecnologia" className="mx-auto h-10 w-auto" />
        <div className="mt-8 rounded-lg bg-card p-8">
          <h1 className="text-2xl font-extrabold text-foreground">
            {mode === "login" ? "Acesso administrativo" : "Criar acesso"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Painel de leads e métricas da landing page.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">E-mail</span>
              <input name="email" type="email" required className={fieldClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Senha</span>
              <input name="password" type="password" required minLength={6} className={fieldClass} />
            </label>

            {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
            {message ? <p className="text-sm text-graphite">{message}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-bold text-gold-foreground disabled:opacity-60"
            >
              {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
              {mode === "login" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="mt-3 w-full rounded-sm border border-input px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Entrar com Google
          </button>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="mt-5 w-full text-sm text-muted-foreground underline underline-offset-2"
          >
            {mode === "login" ? "Não tem acesso? Criar conta" : "Já tenho acesso"}
          </button>
        </div>

        <Link to="/" className="mt-6 block text-center text-sm text-navy-foreground/70 hover:text-gold">
          ← Voltar para o site
        </Link>
      </div>
    </main>
  );
}
