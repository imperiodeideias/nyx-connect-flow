import logoNyx from "@/assets/logo-nyx.webp.asset.json";
import logoNyxBranco from "@/assets/logo-nyx-branco.webp.asset.json";
import heroCoberturaIot from "@/assets/hero-cobertura-iot.webp.asset.json";
import hospitalInteligenteConectado from "@/assets/hospital-inteligente-conectado.png.asset.json";
import trackerGatewayBeacon from "@/assets/tracker-gateway-beacon.webp.asset.json";
import trackerGateway from "@/assets/tracker-gateway.webp.asset.json";
import trackerPulseira from "@/assets/tracker-pulseira.webp.asset.json";
import trackerSensorAmbiente from "@/assets/tracker-sensor-ambiente.webp.asset.json";
import beaconTag from "@/assets/beacon-tag.webp.asset.json";
import beaconDispenser from "@/assets/beacon-dispenser.webp.asset.json";
import beaconPulseira from "@/assets/beacon-pulseira.webp.asset.json";
import beaconNeonato from "@/assets/beacon-neonato.webp.asset.json";
import beaconPorta from "@/assets/beacon-porta.webp.asset.json";
import beaconTotem from "@/assets/beacon-totem.webp.asset.json";
import beaconAtivos from "@/assets/beacon-ativos.webp.asset.json";
import dashboard from "@/assets/dashboard.webp.asset.json";

import logoAbralimp from "@/assets/logo-abralimp.webp.asset.json";
import logoAirjet from "@/assets/logo-airjet.webp.asset.json";
import logoDna from "@/assets/logo-dna-facilities.webp.asset.json";
import logoDpadua from "@/assets/logo-dpadua.webp.asset.json";
import logoBaleia from "@/assets/logo-hospital-da-baleia.webp.asset.json";
import logoHotelaria from "@/assets/logo-hotelaria-hospitalar.webp.asset.json";
import logoInterativa from "@/assets/logo-interativa.webp.asset.json";
import logoLboe from "@/assets/logo-lboe.webp.asset.json";
import logoMaxxima from "@/assets/logo-maxxima.webp.asset.json";
import logoMorhena from "@/assets/logo-morhena.webp.asset.json";
import logoMyclean from "@/assets/logo-myclean.webp.asset.json";
import logoOpen from "@/assets/logo-open-facilities.webp.asset.json";
import logoPerfilX from "@/assets/logo-perfil-x.webp.asset.json";
import logoPrevent from "@/assets/logo-prevent-senior.webp.asset.json";
import logoSapore from "@/assets/logo-sapore.webp.asset.json";
import logoShherj from "@/assets/logo-shherj.webp.asset.json";
import logoVeralana from "@/assets/logo-veralana.webp.asset.json";

export const img = {
  logoNyx: logoNyx.url,
  logoNyxBranco: logoNyxBranco.url,
  heroCoberturaIot: heroCoberturaIot.url,
  hospitalInteligente: hospitalInteligenteConectado.url,
  trackerGatewayBeacon: trackerGatewayBeacon.url,
  trackerGateway: trackerGateway.url,
  trackerPulseira: trackerPulseira.url,
  trackerSensorAmbiente: trackerSensorAmbiente.url,
  beaconTag: beaconTag.url,
  beaconDispenser: beaconDispenser.url,
  beaconPulseira: beaconPulseira.url,
  beaconNeonato: beaconNeonato.url,
  beaconPorta: beaconPorta.url,
  beaconTotem: beaconTotem.url,
  beaconAtivos: beaconAtivos.url,
  dashboard: dashboard.url,
};

export const clientes: { nome: string; src: string; escala?: string }[] = [
  { nome: "Prevent Senior", src: logoPrevent.url },
  { nome: "Hospital da Baleia", src: logoBaleia.url, escala: "scale-[1.7]" },
  { nome: "Grupo Veralana", src: logoVeralana.url },
  { nome: "Maxxima Facilities", src: logoMaxxima.url },
  { nome: "Morhena", src: logoMorhena.url },
  { nome: "D'Pádua Residencial Senior", src: logoDpadua.url },
  { nome: "Perfil-X Construtora", src: logoPerfilX.url },
  { nome: "Grupo Interativa", src: logoInterativa.url, escala: "scale-125" },
  { nome: "Hotelaria Hospitalar", src: logoHotelaria.url },
  { nome: "LBOE", src: logoLboe.url, escala: "scale-125" },
  { nome: "Abralimp", src: logoAbralimp.url },
  { nome: "Sociedade de Hotelaria Hospitalar do Estado do Rio de Janeiro", src: logoShherj.url },
  { nome: "Sapore Saúde", src: logoSapore.url, escala: "scale-[1.8]" },
  { nome: "MyClean do Brasil", src: logoMyclean.url, escala: "scale-110" },
  { nome: "DNA Facilities", src: logoDna.url },
  { nome: "AirJet Táxi Aéreo", src: logoAirjet.url },
  { nome: "Open Facilities", src: logoOpen.url },
];
