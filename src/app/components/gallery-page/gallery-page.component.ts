import { Component } from '@angular/core';

import { GALLERY_ITEMS } from '../../site-data';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css',
})
export class GalleryPageComponent {
  protected readonly galleryItems = GALLERY_ITEMS;
}
