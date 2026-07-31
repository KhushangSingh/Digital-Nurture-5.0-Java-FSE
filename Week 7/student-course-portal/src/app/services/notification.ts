import { Injectable } from '@angular/core';

@Injectable() // Component-level provider (no providedIn: 'root')
export class NotificationService {
  getNotification(): string {
    return 'This is a local notification instance!';
  }
}
