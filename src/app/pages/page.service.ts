import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private currentPageSubject = new BehaviorSubject<string | null>(null);
  currentPage$ = this.currentPageSubject.asObservable();

  changePage(page: string) {
    this.currentPageSubject.next(page);
  }
}
