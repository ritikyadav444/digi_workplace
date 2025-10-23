import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgbToastModule, CommonModule],
  host: { '[class.ngb-toasts]': 'true' },
  template: `
    @for (toast of toastService.toasts; track $index) {
      <ngb-toast
        [ngClass]="toast.classname"
        [autohide]="true"
        [delay]="toast.delay || 5000"
        (hidden)="toastService.remove(toast)"
      >
        <div class="d-flex align-items-center justify-content-between">
          <span [ngClass]="toast.bg">
            <i *ngIf="toast.type === 'success'" class="mdi mdi-check-all label-icon me-0 align-middle"></i>
            <i *ngIf="toast.type === 'error'" class="mdi mdi-block-helper me-0 align-middle"></i>
            <i *ngIf="toast.type === 'info'" class="mdi mdi-alert-circle-outline me-0 align-middle"></i>
            <i *ngIf="toast.type === 'warning'" class="mdi mdi-alert-outline me-0 align-middle"></i>
          </span>

          <div class="ms-2 flex-fill">
            <ng-container *ngIf="isTemplate(toast); else text">
              <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
            </ng-container>
            <ng-template #text>{{ toast.textOrTpl }}</ng-template>
          </div>

          <button
            type="button"
            class="btn-close ms-2"
            aria-label="Close"
            (click)="toastService.remove(toast)">
          </button>
        </div>
      </ngb-toast>
    }
  `,
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: { textOrTpl: any }): boolean {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
