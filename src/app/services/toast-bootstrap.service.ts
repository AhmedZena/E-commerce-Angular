import { Injectable, TemplateRef } from '@angular/core';

export interface ToastBootstrapOptions {
  title: string;
  template: TemplateRef<any>;
  message: string;
  delay?: number;
  autohide?: boolean;
  classname?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastBootstrapService {
  toasts: ToastBootstrapOptions[] = [];

  show(toast: ToastBootstrapOptions) {
    this.toasts.push(toast);
  }

  remove(toast: ToastBootstrapOptions) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts = [];
  }
}
