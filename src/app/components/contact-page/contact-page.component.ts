import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly contactInfo = CONTACT_INFO;
}
