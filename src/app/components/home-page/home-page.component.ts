import { Component, EventEmitter, Output } from '@angular/core';

import {
  HERO_STATS,
  SERVICE_TICKERS,
  WHY_DESCRIPTIONS,
  WHY_ITEMS,
  PageId,
} from '../../site-data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @Output() pageChange = new EventEmitter<PageId>();

  protected readonly heroStats = HERO_STATS;
  protected readonly tickerItems = SERVICE_TICKERS;
  protected readonly whyItems = WHY_ITEMS;
  protected readonly whyDescriptions = WHY_DESCRIPTIONS;
}
