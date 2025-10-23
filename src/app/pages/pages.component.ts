import { Component } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  currentPage: string | null = null;

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    const storedPage = localStorage.getItem('pageName');
    if (storedPage) {
      this.currentPage = storedPage;
    }
    this.pageService.currentPage$.subscribe((page) => {
      if (page) {
        this.currentPage = page;
        localStorage.setItem('pageName', page);
      }
    });
  }
}
