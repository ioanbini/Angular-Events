import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'angular-events';
}
