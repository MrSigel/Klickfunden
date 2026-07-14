import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * The single funnel: a WhatsApp message. Optionally carries a pre-filled text
 * (used by the cost calculator to hand over the customer's configuration).
 */
export function WhatsAppCta({
  variant = "primary",
  label = "Schreib uns",
  message,
  className = "",
}: {
  variant?: "primary" | "ghost";
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
      aria-label={`${label} über WhatsApp`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
