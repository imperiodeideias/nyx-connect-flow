import {
  Activity,
  BedDouble,
  Boxes,
  ClipboardCheck,
  Gauge,
  MapPin,
  Radar,
  ShieldCheck,
  Sparkles,
  Thermometer,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";
import { clientes, img } from "@/lib/assets";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy-deep pt-28 text-navy-foreground lg:pt-36">
      <img
        src={img.heroCoberturaIot}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/90 to-navy-deep" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 text-gold">
            <span className="relative inline-flex size-2 rounded-full bg-gold iot-pulse" aria-hidden />
            Soluções digitais + IoT para saúde
          </span>
          <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.5rem)] font-extrabold text-navy-foreground">
            O que não é medido
            <span className="block text-gold">não é gerenciado.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/80">
            A nyx sensoriza ativos, pacientes e ambientes hospitalares em tempo real. Menos perda de equipamento,
            menos tempo ocioso de leito e evidência objetiva de cada processo assistencial.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="rounded-sm bg-gold px-7 py-4 text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Quero um diagnóstico gratuito
            </a>
            <a
              href="#tracker"
              className="rounded-sm border border-white/25 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Conhecer o Tracker
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              { valor: "24/7", label: "Monitoramento contínuo" },
              { valor: "100%", label: "Rastreabilidade dos ativos" },
              { valor: "Tempo real", label: "Dados para decisão" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-gold sm:text-3xl">{stat.valor}</dt>
                <dd className="mt-1 text-sm text-navy-foreground/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="lg:pl-4">
          <div id="contato-hero">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const dores = [
  {
    icon: Boxes,
    titulo: "Ativos que somem",
    texto: "Bombas de infusão, cadeiras e camas paradas em corredores enquanto a unidade aluga equipamento extra.",
  },
  {
    icon: BedDouble,
    titulo: "Leito ocioso invisível",
    texto: "Alta dada, leito liberado só horas depois. O gargalo existe, mas ninguém consegue prová-lo com dados.",
  },
  {
    icon: ClipboardCheck,
    titulo: "Processo sem evidência",
    texto: "Higienização, rondas e checklists registrados no papel — sem hora, sem local, sem auditoria confiável.",
  },
];

export function Problema() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">O problema</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
            A operação hospitalar perde dinheiro naquilo que ninguém enxerga.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dores.map((dor, index) => (
            <Reveal key={dor.titulo} delay={index * 100}>
              <article className="h-full border-t-2 border-gold bg-mist p-7">
                <dor.icon className="size-7 text-navy" aria-hidden />
                <h3 className="mt-5 text-xl font-extrabold text-foreground">{dor.titulo}</h3>
                <p className="mt-3 text-base text-graphite">{dor.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const etapas = [
  { titulo: "Sensorizar", texto: "Beacons, tags e gateways captam presença, movimento e condição em todo o ambiente." },
  { titulo: "Conectar", texto: "A rede IoT transmite os eventos em tempo real, sem depender de registro manual." },
  { titulo: "Analisar", texto: "Painéis mostram uso, ociosidade, fluxo e desvios de processo por setor e turno." },
  { titulo: "Otimizar", texto: "A gestão age sobre dados: menos aluguel, menos retrabalho, mais giro de leito." },
];

export function Tracker() {
  return (
    <section id="tracker" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow normal-case text-gold">Tracker by nyx</span>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold">
              Uma plataforma IoT feita para o chão do hospital.
            </h2>
            <p className="mt-5 text-lg text-navy-foreground/80">
              Hardware próprio, instalação não invasiva e software de gestão. O Tracker transforma equipamentos,
              pessoas e ambientes em fontes contínuas de dados.
            </p>
            <ul className="mt-8 space-y-4">
              {etapas.map((etapa, index) => (
                <li key={etapa.titulo} className="flex gap-4 border-b border-white/10 pb-4">
                  <span className="mt-0.5 font-display text-sm font-extrabold text-gold">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-extrabold">{etapa.titulo}</h3>
                    <p className="text-sm text-navy-foreground/70">{etapa.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            <figure className="col-span-full overflow-hidden rounded-lg bg-white/5 p-4">
              <img src={img.trackerGatewayBeacon} alt="Gateway e beacon do Tracker by nyx" className="mx-auto max-h-72 w-auto object-contain" loading="lazy" />
              <figcaption className="mt-3 text-center text-xs text-navy-foreground/60">Gateway + beacon</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg bg-white/5 p-4">
              <img src={img.trackerPulseira} alt="Pulseira com beacon para pacientes" className="mx-auto max-h-44 w-auto object-contain" loading="lazy" />
              <figcaption className="mt-3 text-center text-xs text-navy-foreground/60">Pulseira do paciente</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg bg-white/5 p-4">
              <img src={img.trackerSensorAmbiente} alt="Sensor de ambiente do Tracker by nyx" className="mx-auto max-h-44 w-auto object-contain" loading="lazy" />
              <figcaption className="mt-3 text-center text-xs text-navy-foreground/60">Gateway / Sensor de Ambientes</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const aplicacoes = [
  {
    icon: Boxes,
    titulo: "Gestão de ativos",
    texto: "Localização, inventário automático e taxa de uso real de cada equipamento móvel.",
  },
  {
    icon: Users,
    titulo: "Jornada do paciente",
    texto: "Tempo em cada etapa — recepção, exame, internação, alta — medido sem digitação.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança e rondas",
    texto: "Comprovação de presença da equipe nos pontos críticos, com hora e local.",
  },
  {
    icon: Thermometer,
    titulo: "Monitoramento de ambientes",
    texto: "Temperatura, umidade e condições críticas com alerta imediato de desvio.",
  },
  {
    icon: MapPin,
    titulo: "Fluxo e ocupação",
    texto: "Mapas de calor mostram gargalos, filas e áreas subutilizadas por horário.",
  },
  {
    icon: Activity,
    titulo: "Produtividade assistencial",
    texto: "Indicadores por setor e turno para dimensionar equipe com base em evidência.",
  },
];

export function Aplicacoes() {
  return (
    <section id="aplicacoes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">Aplicações</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
            Um sensor. Muitas respostas para a sua operação.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {aplicacoes.map((item, index) => (
            <Reveal key={item.titulo} delay={index * 60}>
              <article className="h-full bg-background p-7 transition-colors hover:bg-mist">
                <item.icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-5 text-lg font-extrabold text-foreground">{item.titulo}</h3>
                <p className="mt-2 text-base text-graphite">{item.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HospitalInteligente() {
  return (
    <section id="hospital" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-lg">
            <img
              src={img.hospitalInteligente}
              alt="Ambiente hospitalar conectado com sensores IoT"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow text-graphite">Hospital inteligente</span>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
            Da coleta invisível à decisão de diretoria.
          </h2>
          <p className="mt-5 text-lg text-graphite">
            A camada IoT alimenta painéis executivos com indicadores que antes dependiam de planilha e memória.
            A diretoria acompanha eficiência de ativos, tempo de ciclo e conformidade de processo no mesmo lugar.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Redução de aluguel e recompra de equipamentos",
              "Giro de leito com tempo real de higienização",
              "Auditoria de processo com registro automático",
              "Integração com os sistemas já usados pela instituição",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-foreground">
                <Sparkles className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Newcheck() {
  return (
    <section id="newcheck" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">Newcheck</span>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
            Higienização comprovada, não presumida.
          </h2>
          <p className="mt-5 text-lg text-graphite">
            O Newcheck registra cada etapa da limpeza e da manutenção com data, hora, local e responsável.
            A gestão enxerga produtividade por colaborador e a instituição responde auditorias com evidência.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ClipboardCheck, label: "Checklists digitais" },
              { icon: Gauge, label: "Produtividade por equipe" },
              { icon: TrendingUp, label: "Indicadores de conformidade" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-gold pl-4">
                <item.icon className="size-5 text-navy" aria-hidden />
                <p className="mt-2 text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <figure className="overflow-hidden rounded-lg border border-border">
            <img src={img.dashboard} alt="Painel de indicadores da plataforma nyx" className="w-full object-cover" loading="lazy" />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

const beneficios = [
  { icon: TrendingUp, titulo: "Redução de custo", texto: "Menos aluguel, menos perda e compra dimensionada pelo uso real." },
  { icon: Radar, titulo: "Visibilidade total", texto: "Cada ativo e cada etapa com posição e histórico consultáveis." },
  { icon: ShieldCheck, titulo: "Segurança assistencial", texto: "Alertas em desvios críticos antes que virem incidente." },
  { icon: Gauge, titulo: "Eficiência operacional", texto: "Equipes focadas no cuidado, não em procurar equipamento." },
];

export function Beneficios() {
  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-gold">Resultados</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold">
            O retorno aparece no primeiro ciclo de medição.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((item, index) => (
            <Reveal key={item.titulo} delay={index * 80}>
              <div className="border-t border-white/15 pt-6">
                <item.icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-lg font-extrabold">{item.titulo}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProvaSocial() {
  return (
    <section id="clientes" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">Confiança</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-foreground">
            Instituições de saúde e facilities que já contam com a nyx.
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clientes.map((cliente, index) => (
            <Reveal key={cliente.nome} as="li" delay={index * 30} className="flex h-24 items-center justify-center p-3">
              <img
                src={cliente.src}
                alt={cliente.nome}
                loading="lazy"
                className={`h-14 w-full object-contain opacity-75 transition-[opacity,transform] hover:opacity-100 ${cliente.escala ?? ""}`}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section id="contato" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">Próximo passo</span>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
            Vamos medir o que hoje é invisível na sua operação.
          </h2>
          <p className="mt-5 text-lg text-graphite">
            Em uma conversa de 30 minutos mapeamos os pontos de perda da sua instituição e mostramos qual
            aplicação do Tracker traz retorno mais rápido.
          </p>
          <figure className="mt-10 overflow-hidden rounded-lg">
            <img src={img.gestaoAtivos} alt="Equipamentos hospitalares monitorados pela nyx" className="w-full object-cover" loading="lazy" />
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
