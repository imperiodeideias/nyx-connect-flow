import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { img } from "@/lib/assets";

const links = [
  { href: "#tracker", label: "tracker" },
  { href: "#jornada", label: "Jornada Cirúrgica" },
  { href: "#gestao-ativos", label: "Ativos" },
  { href: "#newcheck", label: "newcheck" },
  { href: "#hospitalidade", label: "Hospitalidade" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-deep/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <img src={img.logoNyxBranco} alt="nyx Tecnologia" className="h-8 w-auto shrink-0" />
          <span className="sr-only">nyx Tecnologia</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="hidden shrink-0 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Falar com especialista
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-sm border border-white/20 p-2 text-navy-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-navy-deep px-5 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base font-medium text-navy-foreground/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
          >
            Falar com especialista
          </a>
        </nav>
      ) : null}
    </header>
  );
}
