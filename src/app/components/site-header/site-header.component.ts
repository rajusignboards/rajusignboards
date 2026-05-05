import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NAV_ITEMS, PageId } from '../../site-data';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  @Input({ required: true }) currentPage!: PageId;
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly navItems = NAV_ITEMS;
}
