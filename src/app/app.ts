import { afterNextRender, Component, HostListener, signal } from '@angular/core';

import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JourneyPageComponent } from './components/journey-page/journey-page.component';
import { ProcessPageComponent } from './components/process-page/process-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { PageId } from './site-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HomePageComponent,
    ServicesPageComponent,
    JourneyPageComponent,
    ProcessPageComponent,
    ContactPageComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentPage = signal<PageId>('home');
  protected readonly showScrollTop = signal(false);
  private readonly sectionIds: PageId[] = ['home', 'services', 'journey', 'process', 'contact'];

  constructor() {
    afterNextRender(() => {
      this.updateCurrentSection();
    });
  }

  protected showPage(page: PageId): void {
    this.currentPage.set(page);
    document.getElementById(page)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateCurrentSection();
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    this.showScrollTop.set(total > 0 && (scrolled / total) * 100 > 30);
  }

  private updateCurrentSection(): void {
    const offset = 120;
    let activeSection: PageId = 'home';

    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) continue;
      if (element.getBoundingClientRect().top - offset <= 0) {
        activeSection = sectionId;
      }
    }

    this.currentPage.set(activeSection);
  }
}
