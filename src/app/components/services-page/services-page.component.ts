import { Component, EventEmitter, Output } from '@angular/core';

import { ALL_SERVICES, PageId } from '../../site-data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly services = ALL_SERVICES;
}
