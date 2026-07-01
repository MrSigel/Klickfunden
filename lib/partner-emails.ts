export const partnerEmailTemplates = {
  registration: (name: string) => ({ subject: "Deine Partneranfrage ist eingegangen", text: `Hallo ${name},\n\nvielen Dank für deine Registrierung beim Klickfunden Partnerprogramm. Deine Anfrage wird intern geprüft. Nach der Prüfung erhältst du eine Rückmeldung.\n\nKlickfunden` }),
  accepted: (name: string) => ({ subject: "Deine Partneranfrage wurde akzeptiert", text: `Hallo ${name},\n\ndeine Partneranfrage wurde akzeptiert. Du kannst dich unter https://www.klickfunden.de/partner/login mit deinen registrierten Zugangsdaten anmelden.\n\nKlickfunden` }),
  payment: (name: string) => ({ subject: "Deine Partnerzahlung wurde bestätigt", text: `Hallo ${name},\n\ndeine Zahlung wurde bestätigt. Dein aktuelles Kontingent findest du im Partner-Dashboard.\n\nKlickfunden` }),
  answered: (name: string) => ({ subject: "Deine Keyword-Anfrage wurde beantwortet", text: `Hallo ${name},\n\ndeine Keyword-Anfrage wurde beantwortet. Die Antwort findest du geschützt in deinem Partner-Dashboard.\n\nKlickfunden` }),
};

export async function sendPartnerEmail(_to: string, _template: { subject: string; text: string }) {
  // Versand bewusst vorbereitet: Erst aktivieren, wenn ein freigegebener Mail-Provider konfiguriert ist.
  return { sent: false as const, reason: "email_provider_not_configured" };
}
