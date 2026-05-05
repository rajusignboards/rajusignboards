import { Component } from '@angular/core';

import { TIMELINE_ITEMS } from '../../site-data';

@Component({
  selector: 'app-journey-page',
  standalone: true,
  templateUrl: './journey-page.component.html',
  styleUrl: './journey-page.component.css',
})
export class JourneyPageComponent {
  protected readonly timelineItems = TIMELINE_ITEMS;
}
