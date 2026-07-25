import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { AboutPageComponent } from './components/about/about-page.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'verein', redirectTo: '', pathMatch: 'full' },
  { path: 'business', redirectTo: '', pathMatch: 'full' },
  { path: 'ueber-mich', redirectTo: '', pathMatch: 'full' },
  { path: 'impressum', component: ImprintComponent },
  { path: 'barrierefreiheit', component: AccessibilityComponent },
  { path: 'datenschutz', component: PrivacyComponent },
  { path: '**', component: ErrorComponent },
];
