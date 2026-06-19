import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

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
  protected menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  navigate(page: PageId): void {
    this.pageChange.emit(page);
    this.menuOpen.set(false);
  }
}
