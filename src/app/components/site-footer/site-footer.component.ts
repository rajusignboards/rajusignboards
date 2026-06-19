import { Component, EventEmitter, Output } from '@angular/core';

import {
  FOOTER_COMPANY,
  FOOTER_CONTACTS,
  FOOTER_SERVICES,
  PageId,
} from '../../site-data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly footerServices = FOOTER_SERVICES;
  protected readonly footerCompany = FOOTER_COMPANY;
  protected readonly footerContacts = FOOTER_CONTACTS;
  protected readonly companyLinks: PageId[] = ['home', 'journey', 'contact'];
}
