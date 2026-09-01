import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Política de Privacidade — NYX Tecnologia";
const description =
  "Como a NYX Tecnologia coleta, usa e protege os dados pessoais informados na landing page, conforme a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Politica,
});

function Politica() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <Link to="/" className="text-sm font-semibold text-graphite hover:text-foreground">
        ← Voltar para o site
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold text-foreground">Política de Privacidade</h1>
      <p className="mt-4 text-graphite">
        A NYX Tecnologia respeita a sua privacidade e trata dados pessoais conforme a Lei Geral de Proteção de
        Dados (Lei nº 13.709/2018).
      </p>

      <section className="mt-10 space-y-6 text-base text-foreground">
        <div>
          <h2 className="text-xl font-extrabold">Dados coletados</h2>
          <p className="mt-2 text-graphite">
            Coletamos nome, empresa, cargo, e-mail corporativo, WhatsApp e o interesse informado no formulário.
            Registramos também dados de navegação anônimos, como origem da visita, campanha e tipo de dispositivo.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Finalidade</h2>
          <p className="mt-2 text-graphite">
            Os dados são usados exclusivamente para contato comercial, apresentação de soluções e melhoria das
            nossas campanhas. Não vendemos nem compartilhamos dados com terceiros para fins publicitários.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Armazenamento e segurança</h2>
          <p className="mt-2 text-graphite">
            As informações ficam em ambiente controlado, com acesso restrito à equipe autorizada da NYX e
            protegidas por regras de acesso e autenticação.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Seus direitos</h2>
          <p className="mt-2 text-graphite">
            Você pode solicitar confirmação, acesso, correção ou exclusão dos seus dados a qualquer momento pelo
            e-mail{" "}
            <a href="mailto:comercial@nyx.tec.br" className="font-semibold underline underline-offset-2">
              comercial@nyx.tec.br
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
