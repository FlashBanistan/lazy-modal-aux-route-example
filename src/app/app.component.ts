import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'modal-aux-route-example';
  link = [
    '/lazy-dialog-module/lazy-dialog',
    { outlets: { modal: ['dialog'] } },
  ];
}
