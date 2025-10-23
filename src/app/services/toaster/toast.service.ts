import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSuccess(message: string) {
    this.show(message, { classname: 'bg-success-color text-center ngb-toast', type: 'success', delay: 5000, bg: 'bgsuccess' });
  }

  showError(message: string) {
    this.show(message, { classname: 'bg-danger-color text-center ngb-toast', type: 'error', delay: 5000, bg: 'bgsuccess1' });
  }

  showInfo(message: string) {
    this.show(message, { classname: 'bg-info-color text-center ngb-toast', type: 'info', delay: 5000, bg: 'bgsuccess2' });
  }

  showWarning(message: string) {
    this.show(message, { classname: 'bg-warning-color text-center ngb-toast', type: 'warning', delay: 5000, bg: 'bgsuccess3' });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

}