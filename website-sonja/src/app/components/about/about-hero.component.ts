import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  template: `
    <div class="lg:col-span-5 order-2 lg:order-1 relative">
      <div class="relative group">
        <div
          class="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900"
        >
          <div
            class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"
          ></div>
          <img src="sonja.jpeg" alt="Sonja Waldenspuhl" class="w-full h-full object-cover" />
        </div>

        <div
          class="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600/20 rounded-3xl -z-0 group-hover:border-blue-600/40 transition-colors duration-500"
        ></div>
        <div
          class="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-0"
        ></div>
      </div>

      <div
        class="absolute -bottom-2 -left-2 md:-left-8 z-20 bg-blue-50/80 dark:bg-blue-950/80 backdrop-blur-xl border border-blue-200 dark:border-white/10 p-6 rounded-2xl shadow-xl hidden md:block"
      >
        <div class="text-blue-400 font-bold text-2xl">IT</div>
        <div class="text-gray-500 dark:text-gray-400 text-sm">für Vereine</div>
      </div>
    </div>
  `,
  standalone: true,
})
export class AboutHeroComponent {}
