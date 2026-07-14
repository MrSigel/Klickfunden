import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Mobile-only sticky conversion bar — always one tap from WhatsApp. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-ink/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary w-full"
      >
        <WhatsAppIcon />
        Jetzt per WhatsApp schreiben
      </a>
    </div>
  );
}
