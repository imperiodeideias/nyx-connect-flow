import {
  Activity,
  Baby,
  BedDouble,
  BellRing,
  Boxes,
  BrainCircuit,
  ClipboardCheck,
  Clock,
  DoorOpen,
  Droplets,
  ExternalLink,
  Gauge,
  MapPin,
  MonitorCog,
  PackageOpen,
  Radar,
  RadioTower,
  Route,
  ShieldCheck,
  Sparkles,
  Thermometer,
  TrendingUp,
  Users,
  Watch,
  Wifi,
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
              { valor: "+30", label: "hospitais em operação" },
              { valor: "+37 mil", label: "jornadas cirúrgicas rastreadas" },
              { valor: "+10 mi", label: "higienizações registradas/ano" },
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

const jornada = [
  { titulo: "Recepção", detalhe: "Internação e associação do beacon" },
  { titulo: "Leito", detalhe: "Admissão e preparo de enfermagem" },
  { titulo: "Espera", detalhe: "Transporte ao centro cirúrgico" },
  { titulo: "Sala cirúrgica", detalhe: "Anestesia, cirurgia e curativo" },
  { titulo: "Internação", detalhe: "Chegada ao leito e alta" },
];

export function JornadaCirurgica() {
  return (
    <section id="jornada" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-graphite">Jornada do paciente cirúrgico</span>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-foreground">
              Cada etapa visível. Cada atraso acionável.
            </h2>
            <p className="text-lg text-graphite">
              O beacon acompanha o trajeto físico do paciente e os gateways registram permanência e deslocamentos,
              sem interação humana.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-3 lg:grid-cols-5">
          {jornada.map((etapa, index) => (
            <Reveal key={etapa.titulo} as="li" delay={index * 70} className="relative border-t-2 border-gold bg-background p-5">
              <span className="font-display text-sm font-extrabold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{etapa.titulo}</h3>
              <p className="mt-2 text-sm text-graphite">{etapa.detalhe}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 grid gap-6 bg-navy p-7 text-navy-foreground md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-4">
            <Route className="mt-1 size-7 shrink-0 text-gold" aria-hidden />
            <div>
              <h3 className="text-xl font-extrabold">Rastreamento completo, da admissão à alta</h3>
              <p className="mt-2 text-sm text-navy-foreground/75">
                Na sala, registros de início e fim de anestesia e cirurgia completam a leitura de ocupação,
                ociosidade e atrasos. O beacon é desassociado somente na alta.
              </p>
            </div>
          </div>
          <a href="#resultados" className="font-semibold text-gold underline underline-offset-4">Ver validação científica</a>
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
    icon: Clock,
    titulo: "Salas cirúrgicas ociosas",
    texto: "Cirurgias canceladas, sala liberada sem uso e equipamento ou equipe no lugar errado na hora errada.",
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
  { titulo: "Coletar", texto: "Beacons BLE e gateways captam presença, movimento e condições do ambiente." },
  { titulo: "Conectar", texto: "Wi‑Fi e LoRa levam eventos ao painel em tempo real, sem registros manuais." },
  { titulo: "Processar", texto: "Os dados revelam ocupação, ociosidade, fluxo, desvios e evasão de ativos." },
  { titulo: "Evoluir", texto: "Evidências apoiam melhorias e criam base para aprendizado de máquina e predições." },
];

const beacons = [
  { icon: Droplets, titulo: "Dispenser", texto: "Reposição de insumos" },
  { icon: Watch, titulo: "Pulseira", texto: "Equipes e pacientes" },
  { icon: Baby, titulo: "Neonato", texto: "Recém-nascidos", badge: "Em desenvolvimento" },
  { icon: DoorOpen, titulo: "Porta", texto: "Acessos e atividades" },
  { icon: MonitorCog, titulo: "Totem / interativos", texto: "Serviços e marcação de tempos" },
  { icon: PackageOpen, titulo: "Ativos", texto: "Equipamentos diversos" },
];

export function Tracker() {
  return (
    <section id="tracker" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow normal-case text-gold">Tracker by nyx</span>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold">
              IoT para transformar Hospitais Inteligentes
            </h2>
            <p className="mt-5 text-lg text-navy-foreground/80">
              Hardware e software próprios. O Tracker conecta beacons BLE a gateways por Wi‑Fi e LoRa para
              transformar equipamentos, pessoas e ambientes em fontes contínuas de dados.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-navy-foreground/80">
              {["BLE", "Wi‑Fi", "LoRa", "Cercas eletrônicas", "Alertas de evasão"].map((item) => (
                <span key={item} className="border border-white/15 px-3 py-2">{item}</span>
              ))}
            </div>
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
              <figcaption className="mt-3 text-center text-xs text-navy-foreground/60">Gateway + Beacon</figcaption>
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

        <Reveal className="mt-16 border-t border-white/15 pt-10">
          <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <span className="eyebrow text-gold">Beacons BLE</span>
              <h3 className="mt-3 text-3xl font-extrabold">Um formato para cada jornada.</h3>
            </div>
            <p className="text-base text-navy-foreground/70">
              Pequenos dispositivos de baixo consumo emitem sinais captados pelos gateways, indicando posição,
              passagem e acionamentos em tempo real.
            </p>
          </div>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {beacons.map((item) => (
              <article key={item.titulo} className="relative bg-navy p-6">
                {item.badge ? <span className="absolute right-4 top-4 bg-gold px-2 py-1 text-[10px] font-bold uppercase text-gold-foreground">{item.badge}</span> : null}
                <item.icon className="size-6 text-gold" aria-hidden />
                <h4 className="mt-4 text-lg font-extrabold">Beacon de {item.titulo}</h4>
                <p className="mt-1 text-sm text-navy-foreground/65">{item.texto}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 border border-white/10 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Temperatura", "Luminosidade", "Presença", "Abertura de portas"].map((sensor) => (
              <div key={sensor} className="flex items-center gap-3 text-sm font-semibold">
                <RadioTower className="size-4 text-gold" aria-hidden /> {sensor}
              </div>
            ))}
          </div>
        </Reveal>
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
          <div className="mt-7 border-l-2 border-gold pl-5">
            <strong className="block text-3xl font-extrabold text-foreground">50% menos tempo</strong>
            <p className="mt-1 text-sm text-graphite">na liberação de leitos no Hospital da Criança de Brasília.</p>
            <a href="https://www.hcb.org.br/geral/hospital_da_crianca_de_brasilia_reduz_em_50_o_tempo_de_liberacao_de_leitos_com_nova_tecnologia_de_higienizacao" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-foreground underline underline-offset-4">
              Ler caso publicado <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </div>
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

const resultados = [
  { valor: "+30", texto: "hospitais com a nyx em operação" },
  { valor: "+10 mi", texto: "higienizações registradas por ano no newcheck" },
  { valor: "+37 mil", texto: "jornadas cirúrgicas rastreadas em 3 hospitais" },
];

export function Beneficios() {
  return (
    <section id="resultados" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-gold">Escala e evidência</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold">
            Tecnologia própria, validada na operação e na ciência.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resultados.map((item, index) => (
            <Reveal key={item.valor} delay={index * 80}>
              <div className="border-t border-white/15 pt-6">
                <strong className="text-4xl font-extrabold text-gold lg:text-5xl">{item.valor}</strong>
                <p className="mt-3 text-base text-navy-foreground/70">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 grid gap-8 border border-white/15 p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <span className="eyebrow text-gold">Estudo peer-reviewed · 2025</span>
            <h3 className="mt-4 text-3xl font-extrabold">O tracker tornou visível o gargalo cirúrgico.</h3>
            <p className="mt-4 text-sm text-navy-foreground/70">
              Estudo prospectivo em hospital cirúrgico terciário acompanhou a jornada completa de 320 pacientes
              da recepção à alta com beacons BLE e gateways.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              ["25 min", "mediana na recepção"],
              ["107 min", "no preparo pré-operatório"],
              ["19 min", "transporte ao centro cirúrgico"],
              ["89,9%", "das cirurgias de 1º horário atrasaram"],
            ].map(([valor, label]) => (
              <div key={label} className="border-l-2 border-gold pl-4">
                <strong className="text-2xl font-extrabold text-gold">{valor}</strong>
                <p className="mt-1 text-xs text-navy-foreground/65">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy-foreground/55 lg:col-span-2">
            Shalabi IHMH, Schiesari LMC. Revista do Colégio Brasileiro de Cirurgiões 52:e20253813. DOI 10.1590/0100-6991e-20253813. Atraso médio observado: 39 min.
          </p>
        </Reveal>
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
            Mapeie uma vez. Rastreie tudo. Transforme a gestão.
          </h2>
          <p className="mt-5 text-lg text-graphite">
            Agende uma demonstração e veja como transformar os fluxos da sua instituição em decisões baseadas em evidências.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
