import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { img } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <img src={img.logoNyxBranco} alt="NYX Tecnologia" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            Soluções digitais e IoT para a saúde. Sensorizamos ativos, ambientes e processos para transformar
            operação hospitalar em dado, e dado em decisão.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href="mailto:comercial@nyx.tec.br" className="hover:text-gold">
                comercial@nyx.tec.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href="#contato" className="hover:text-gold">
                Fale com um especialista
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>Brasil — atendimento nacional</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Navegação</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li>
              <a href="#tracker" className="hover:text-gold">
                Tracker by NYX
              </a>
            </li>
            <li>
              <a href="#hospital" className="hover:text-gold">
                Hospital Inteligente
              </a>
            </li>
            <li>
              <Link to="/politica-de-privacidade" className="hover:text-gold">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-navy-foreground/60 lg:px-8">
        © {new Date().getFullYear()} NYX Tecnologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
