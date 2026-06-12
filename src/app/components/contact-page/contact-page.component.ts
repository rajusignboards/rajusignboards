import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CONTACT_INFO, PageId } from '../../site-data';
import { SiteFooterComponent } from '../site-footer/site-footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, SiteFooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly googleMapsPlaceQuery =
    'Raju Sign Boards, Alkapuri Colony, Road no 4, Karimnagar - 505001, Telangana';

  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly contactInfo = CONTACT_INFO;
  protected readonly googleMapsLink =
    'https://maps.app.goo.gl/7CXX8nL1cc3yD7MNA?g_st=aw';
  protected readonly googleMapsEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(this.googleMapsPlaceQuery)}&t=k&z=18&output=embed`,
  );

  protected isSubmitting = false;
  protected submitStatus: 'idle' | 'success' | 'error' = 'idle';

  protected async onSubmit(event: Event, form: HTMLFormElement): Promise<void> {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/s.laxmiprasad2006@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        this.submitStatus = 'success';
        form.reset();
      } else {
        this.submitStatus = 'error';
      }
    } catch (error) {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }
}
