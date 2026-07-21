import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePageDirective } from './directives/translate-page.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website-sonja';
}
