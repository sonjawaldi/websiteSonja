import { Component, output } from '@angular/core';
import { CONTACT_FORM_ENABLED } from '../../config/feature-flags';

interface Challenge {
  value: string;
  label: string;
}

@Component({
  selector: 'app-home-challenges',
  standalone: true,
  template: `
    <section class="bg-white py-14 transition-colors duration-300 dark:bg-black md:py-16">
      <div class="container mx-auto px-6 sm:px-12 lg:px-20">
        <header class="mx-auto max-w-3xl text-center">
          <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/70">Herausforderungen im Vereinsalltag</span>
          <h2 class="mt-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white md:text-3xl">Kommt Ihnen das bekannt vor?</h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">Welche dieser Aussagen beschreibt gerade Ihren Vereinsalltag?</p>
        </header>

        <form class="mx-auto mt-9 max-w-4xl" (submit)="submit($event)">
          <fieldset class="divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5 dark:divide-white/5 dark:border-white/10 dark:bg-white/[0.025]">
            <legend class="sr-only">Typische Herausforderungen im Vereinsalltag auswählen</legend>
            @for (challenge of challenges; track challenge.value) {
              <label class="group flex cursor-pointer items-start gap-4 px-5 py-4 transition-colors hover:bg-blue-50/60 has-[:checked]:bg-blue-50 dark:hover:bg-blue-950/20 dark:has-[:checked]:bg-blue-950/30 sm:px-7 sm:py-5">
                <input type="checkbox" name="challenge" [value]="challenge.value" class="mt-0.5 h-6 w-6 shrink-0 cursor-pointer rounded-md border-2 border-blue-300 text-blue-600 shadow-sm focus:ring-blue-500 dark:border-blue-700 dark:bg-gray-950" />
                <span class="text-sm font-semibold leading-relaxed text-gray-800 dark:text-gray-200 sm:text-base">{{ challenge.label }}</span>
              </label>
            }
          </fieldset>
          <div class="mt-8 text-center">
            <p class="text-lg font-black text-gray-900 dark:text-white md:text-xl">Finde jetzt deine individuelle Lösung und lasse dich beraten.</p>
            <button type="submit" class="mt-5 rounded-2xl bg-blue-600 px-8 py-3.5 font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700">Abschicken</button>
          </div>
        </form>

        @if (dialogOpen) {
          <div class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/70 p-5 backdrop-blur-sm" role="presentation" (click)="dialogOpen = false">
            <section class="relative w-full max-w-lg rounded-3xl bg-white p-7 text-center shadow-2xl dark:bg-gray-900 sm:p-10" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" (click)="$event.stopPropagation()">
              <button type="button" class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Fenster schließen" (click)="dialogOpen = false">&times;</button>
              <span class="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Dein nächster Schritt</span>
              <h3 id="contact-dialog-title" class="mt-3 text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">Hol dir deine individuelle Lösung</h3>
              <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">Erzähl mir, was dein Verein braucht – gemeinsam finden wir eine Lösung, die wirklich zu euch passt. Nimm jetzt unverbindlich Kontakt mit mir auf.</p>
              <a [href]="contactMailto" class="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700">E-Mail schreiben</a>
              @if (contactFormEnabled) {
                <button type="button" class="mt-3 w-full rounded-2xl border-2 border-blue-600 px-6 py-3.5 font-bold text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400" (click)="openContactForm()">Kontaktformular ausfüllen</button>
              }
              <a href="mailto:business@sonjawaldenspuhl.de" class="mt-4 inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-400">business&#64;sonjawaldenspuhl.de</a>
            </section>
          </div>
        }

        <div class="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-5 text-center dark:border-blue-950 dark:bg-blue-950/25">
          <p class="text-sm font-semibold leading-relaxed text-gray-800 dark:text-gray-200 md:text-base">Ich kenne diese Herausforderungen aus eigener Erfahrung und entwickle Lösungen, die dazu passen: <span class="text-blue-700 dark:text-blue-400">bezahlbar, einfach zu pflegen und langfristig tragfähig.</span></p>
        </div>
      </div>
    </section>
  `,
})
export class HomeChallengesComponent {
  readonly contactFormRequested = output<void>();
  readonly contactFormEnabled = CONTACT_FORM_ENABLED;
  readonly challenges: Challenge[] = [
    { value: 'Unsere Website ist veraltet oder mobil nur eingeschränkt nutzbar.', label: 'Unsere Website ist seit Jahren nicht aktualisiert und funktioniert auf dem Smartphone nur eingeschränkt.' },
    { value: 'Unsere Mitgliederverwaltung ist unübersichtlich.', label: 'Unsere Mitgliederverwaltung besteht aus mehreren Excel-Listen, die niemand vollständig überblickt.' },
    { value: 'Uns fehlt technisches Know-how für Website und Software.', label: 'Uns fehlt technisches Know-how, um gute Entscheidungen zu Website und Software zu treffen.' },
    { value: 'Bei Vorstandswechseln gehen Zugänge, Abläufe oder Wissen verloren.', label: 'Bei einem Wechsel im Vorstand gehen Zugänge, Abläufe und wichtiges Wissen verloren.' },
  ];
  contactMailto = 'mailto:business@sonjawaldenspuhl.de';
  dialogOpen = false;

  submit(event: SubmitEvent): void {
    event.preventDefault();
    const selected = new FormData(event.currentTarget as HTMLFormElement).getAll('challenge');
    const selection = selected.length ? selected.map(item => `- ${item}`).join('\n') : '- Ich bin noch nicht sicher und wünsche eine allgemeine Beratung.';
    const subject = encodeURIComponent('Individuelle Lösung für unseren Verein');
    const body = encodeURIComponent(`Hallo Sonja,\n\nbei uns treffen folgende Punkte zu:\n\n${selection}\n\nIch freue mich auf eine unverbindliche Beratung.`);
    this.contactMailto = `mailto:business@sonjawaldenspuhl.de?subject=${subject}&body=${body}`;
    this.dialogOpen = true;
  }

  openContactForm(): void {
    this.dialogOpen = false;
    this.contactFormRequested.emit();
  }
}
