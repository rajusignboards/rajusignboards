import { Component, signal } from '@angular/core';

import { GALLERY_ITEMS, GalleryItem } from '../../site-data';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css',
})
export class GalleryPageComponent {
  protected readonly galleryItems = GALLERY_ITEMS;

  protected activeCategory = signal<GalleryItem | null>(null);

  openModal(item: GalleryItem): void {
    this.activeCategory.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.activeCategory.set(null);
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}
