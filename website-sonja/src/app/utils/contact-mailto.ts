import { Language } from '../services/language.service';

const EMAIL_ADDRESS = 'business@sonjawaldenspuhl.de';

export function createContactMailto(
  language: Language,
  prefill?: { subject: string; message: string },
): string {
  const subject =
    prefill?.subject ??
    (language === 'de' ? 'Anfrage für ein persönliches Gespräch' : 'Request for a meeting');
  const body =
    prefill?.message ??
    (language === 'de'
      ? `Sehr geehrte Frau Waldenspuhl,

ich würde mich freuen, mit Ihnen über ein mögliches Projekt zu sprechen und einen passenden Gesprächstermin zu vereinbaren.

Telefonnummer: [Ihre Telefonnummer]

Ich freue mich auf Ihre Rückmeldung.

Mit freundlichen Grüßen
[Ihr Name]
`
      : `Dear Ms Waldenspuhl,

I would be delighted to discuss a potential project with you and arrange a suitable time for a meeting.

Phone: [Your phone number]

I look forward to hearing from you.

Kind regards,
[Your name]
`);

  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
