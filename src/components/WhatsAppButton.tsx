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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 text-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.125.297-.323.446-.484.149-.162.198-.272.298-.448.1-.174.05-.325-.025-.449-.075-.125-.67-1.612-.918-2.209-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.209c2.826 0 5.118 2.292 5.118 5.117 0 2.826-2.292 5.118-5.118 5.118-2.826 0-5.117-2.292-5.117-5.118 0-2.825 2.291-5.117 5.117-5.117m0-1.802c-3.82 0-6.919 3.099-6.919 6.919 0 1.53.499 2.948 1.344 4.099l-1.344 4.902 4.902-1.343c1.151.845 2.569 1.344 4.099 1.344 3.82 0 6.919-3.099 6.919-6.919s-3.099-6.919-6.919-6.919z" />
      </svg>
      <span className="hidden text-sm font-semibold text-white sm:inline">Fale conosco</span>
    </a>
  );
}
