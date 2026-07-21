import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="home" class="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div
        class="container relative z-10 mx-auto w-full px-6 py-12 text-center sm:px-12 md:py-16 lg:px-20"
      >
        <div
          class="mb-7 inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400 md:text-sm"
        >
          Digitale Lösungen für Vereine
        </div>
        <h1
          class="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Digitale Lösungen für
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >Vereine</span
          >
        </h1>
        <p
          class="mx-auto mb-5 max-w-5xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl"
        >
          Websites, Portale und digitale Prozesse – mit persönlicher Erfahrung im Bereich seltene
          Erkrankungen und Verständnis für ehrenamtliche Strukturen.
        </p>
        <p class="mx-auto mb-12 max-w-3xl text-base text-gray-500 dark:text-gray-400 md:text-lg">
          Barrierearm, modern und einfach – für jedes Alter.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            [routerLink]="['/']"
            fragment="services"
            class="group flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Leistungen ansehen
            <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
          <a
            [routerLink]="['/ueber-mich']"
            fragment="about"
            class="flex items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-50 px-8 py-4 text-lg font-bold text-blue-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-100 hover:shadow-xl dark:border-blue-500/50 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-950/70"
          >
            Über mich
          </a>
          <a
            [routerLink]="['/']"
            fragment="contact"
            class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
      <div class="pointer-events-none absolute left-1/2 top-0 -z-0 h-full w-full -translate-x-1/2">
        <div
          class="absolute left-[-10%] top-[-20%] h-[60%] w-[60%] animate-pulse rounded-full bg-blue-400/10 blur-[140px]"
        ></div>
        <div
          class="absolute bottom-[-20%] right-[-10%] h-[60%] w-[60%] animate-pulse rounded-full bg-purple-400/10 blur-[140px] [animation-delay:2s]"
        ></div>
      </div>
    </section>
  `,
})
export class HomeHeroComponent {}
