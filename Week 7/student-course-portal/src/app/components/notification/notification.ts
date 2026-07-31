import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // Component-level providers create a new service instance for that component and its children — useful when you need isolated state per component instance.
  providers: [NotificationService]
})
export class Notification {
  message = '';
  constructor(private notificationService: NotificationService) {
    this.message = this.notificationService.getNotification();
  }
}
