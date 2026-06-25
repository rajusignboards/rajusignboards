import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

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
  @ViewChildren('countUpNumber') private countUpNumbers?: QueryList<ElementRef<HTMLElement>>;

  protected readonly heroStats = HERO_STATS;
  protected readonly tickerItems = SERVICE_TICKERS;
  protected readonly whyItems = WHY_ITEMS;
  protected readonly whyDescriptions = WHY_DESCRIPTIONS;

  private countObserver?: IntersectionObserver;
  private readonly animationFrames = new Map<HTMLElement, number>();

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const elements = this.countUpNumbers?.map((item) => item.nativeElement) ?? [];

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => this.setFinalCountValue(element));
        return;
      }

      elements.forEach((element) => {
        const parts = this.getCountParts(element);
        element.textContent = this.formatCountValue(0, parts.prefix, parts.suffix);
      });

      this.countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element = entry.target as HTMLElement;
            this.countObserver?.unobserve(element);
            this.animateCount(element);
          });
        },
        { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
      );

      elements.forEach((element) => this.countObserver?.observe(element));
    });
  }

  ngOnDestroy(): void {
    this.countObserver?.disconnect();
    this.animationFrames.forEach((frameId) => cancelAnimationFrame(frameId));
    this.animationFrames.clear();
  }

  private animateCount(element: HTMLElement): void {
    const { target, prefix, suffix } = this.getCountParts(element);
    const duration = target >= 1000 ? 1500 : 1300;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const rawValue = Math.round(target * easedProgress);
      const currentValue =
        target > 200 ? Math.min(target, Math.round(rawValue / 5) * 5) : rawValue;

      element.textContent = this.formatCountValue(currentValue, prefix, suffix);

      if (progress < 1) {
        this.animationFrames.set(element, requestAnimationFrame(tick));
        return;
      }

      this.setFinalCountValue(element);
      this.animationFrames.delete(element);
    };

    this.animationFrames.set(element, requestAnimationFrame(tick));
  }

  private getCountParts(element: HTMLElement) {
    const rawValue = element.dataset['countValue'] ?? '';
    const match = rawValue.match(/^(\D*)([\d,]+)(.*)$/);

    if (!match) {
      return { target: 0, prefix: '', suffix: rawValue };
    }

    return {
      target: Number(match[2].replace(/,/g, '')),
      prefix: match[1],
      suffix: match[3],
    };
  }

  private formatCountValue(value: number, prefix: string, suffix: string): string {
    return `${prefix}${value.toLocaleString('en-IN')}${suffix}`;
  }

  private setFinalCountValue(element: HTMLElement): void {
    element.textContent = element.dataset['countValue'] ?? '';
  }
}
