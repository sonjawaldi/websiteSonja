import { Component } from '@angular/core';
import { CONTACT_FORM_ENABLED } from '../../config/feature-flags';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  readonly contactFormEnabled = CONTACT_FORM_ENABLED;
  mode: 'email' | 'form' = 'email';

  showForm(): void {
    if (this.contactFormEnabled) {
      this.mode = 'form';
    }
  }
}
