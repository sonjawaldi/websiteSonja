import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { AboutPageComponent } from './components/about/about-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ueber-mich', component: AboutPageComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: '**', component: ErrorComponent },
];
