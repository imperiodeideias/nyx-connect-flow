import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Aplicacoes,
  Beneficios,
  CtaFinal,
  Depoimentos,
  GestaoAtivos,
  Hero,
  HospitalInteligente,
  Hospitalidade,
  Intercorrencias,
  JornadaCirurgica,
  Newcheck,
  Problema,
  ProvaSocial,
  Tracker,
} from "@/components/landing/Sections";
import { trackVisit } from "@/lib/leads.functions";
import { getAttribution, isFirstViewOfSession } from "@/lib/tracking";

const title = "nyx Tecnologia — IoT e soluções digitais para hospitais";
const description =
  "Sensorização IoT para gestão de ativos, jornada do paciente e higienização hospitalar. Menos perda de equipamento, mais giro de leito e evidência de cada processo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const track = useServerFn(trackVisit);

  useEffect(() => {
    if (!isFirstViewOfSession()) return;
    const attribution = getAttribution();
    void track({ data: { ...attribution, landing_page: window.location.pathname } }).catch(() => {});
  }, [track]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problema />
        <JornadaCirurgica />
        <Tracker />
        <Aplicacoes />
        <GestaoAtivos />
        <Intercorrencias />
        <HospitalInteligente />
        <Newcheck />
        <Hospitalidade />
        <Beneficios />
        <Depoimentos />
        <ProvaSocial />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
