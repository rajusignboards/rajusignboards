import { Component, EventEmitter, HostListener, Output, signal } from '@angular/core';

import { GALLERY_ITEMS, GalleryItem, PageId } from '../../site-data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly projects = GALLERY_ITEMS;

  protected activeCategory = signal<GalleryItem | null>(null);
  protected activeImage = signal<string | null>(null);
  protected activeImageIndex = signal<number>(-1);

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

  openLightbox(img: string): void {
    const images = this.activeCategory()?.images ?? [];
    this.activeImage.set(img);
    this.activeImageIndex.set(images.indexOf(img));
  }

  closeLightbox(): void {
    this.activeImage.set(null);
    this.activeImageIndex.set(-1);
  }

  prevImage(): void {
    const images = this.activeCategory()?.images ?? [];
    if (!images.length) return;
    const prev = (this.activeImageIndex() - 1 + images.length) % images.length;
    this.activeImage.set(images[prev]);
    this.activeImageIndex.set(prev);
  }

  nextImage(): void {
    const images = this.activeCategory()?.images ?? [];
    if (!images.length) return;
    const next = (this.activeImageIndex() + 1) % images.length;
    this.activeImage.set(images[next]);
    this.activeImageIndex.set(next);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.activeImage()) {
      if (event.key === 'ArrowLeft') this.prevImage();
      else if (event.key === 'ArrowRight') this.nextImage();
      else if (event.key === 'Escape') this.closeLightbox();
    } else if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}
