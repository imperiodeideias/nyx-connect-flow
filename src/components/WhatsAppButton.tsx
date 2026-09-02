import whatsappLogo from "@/assets/whatsapp.png.asset.json";

export function WhatsAppButton() {
  const numero = "5511993083178";
  const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções nyx Tecnologia.");
  const href = `https://wa.me/${numero}?text=${mensagem}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-background p-1.5 shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <img src={whatsappLogo.url} alt="" className="size-12" aria-hidden />
      <span className="sr-only">Fale conosco</span>
    </a>
  );
}
