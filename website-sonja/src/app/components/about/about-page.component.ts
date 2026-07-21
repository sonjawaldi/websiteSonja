import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeContactComponent } from '../home/home-contact.component';
import { HomeHeroComponent } from '../home/home-hero.component';
import { AboutComponent } from './about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeHeroComponent,
    AboutComponent,
    HomeContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-white transition-colors duration-300 dark:bg-black">
      <app-header />
      <main>
        <app-home-hero />
        <app-about />
        <app-home-contact />
      </main>
      <app-footer />
    </div>
  `,
})
export class AboutPageComponent implements OnInit {
  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Über mich | Sonja Waldenspuhl');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Erfahren Sie mehr über Sonja Waldenspuhl, ihre Motivation, Qualifikationen und Erfahrung mit digitalen Lösungen für Vereine.',
    });
  }
}
