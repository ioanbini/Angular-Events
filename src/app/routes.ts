import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/events-list/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';


export const routes :Routes  = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' } // if the path is empty or the user is in the root of our site
  //redirect to /events and the path is full , wich means absolute path with only events keyword
]
