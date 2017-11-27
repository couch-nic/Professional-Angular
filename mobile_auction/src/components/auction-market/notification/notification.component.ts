import { Component } from '@angular/core';

@Component({
  selector: 'notification-component',
  templateUrl: '/src/components/auction-market/notification/notification.component.html'
})

export class NotificationComponent {
  showNotification: boolean;

  toggleNotification(condition){
    console.log(condition)
    if (condition === true){
      this.showNotification = true
    }
  }
}
