import { Component } from '@angular/core';
import { PageService } from '../pages/page.service';
import { NgZone } from '@angular/core';
import { ToastService } from '../services/toaster/toast.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  mobileView: boolean = window.innerWidth <= 500;
  pageName: string | null = null;
  toggleSize: boolean = true;
  constructor(
    private pageService: PageService,
    private toaster: ToastService,
  ) {}

  ngOnInit(): void {
    this.pageName = localStorage.getItem('pageName') || 'dashboard';
  }

  chagePage(page: string) {
    this.pageName = page;
    localStorage.setItem('pageName', page);
    this.pageService.changePage(page);
    this.toaster.showSuccess(`Switched to ${page.charAt(0).toUpperCase() + page.slice(1)} page`,)
  }

  toggleMenu() {
    this.toggleSize = !this.toggleSize;
  }
}
