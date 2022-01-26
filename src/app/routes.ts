import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-page.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventsListResolverService } from './services/events-list-resolver.service';


export const routes :Routes  = [
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } }, // consume the resolver
  /* before navigate to this route call the eventslistResolverService and when the resolver finishes and returns us some data add these data to the
  route as a property named events  only then render and load and navigate to
  this component */
  { path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivate'] },
  /* canDeactivate prevent the user from leaving a page , here we are using a function (its implemented in create-event.ts) */
  { path: '404',component:Error404Component},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  /*for can Activate we can use a function or a service , here we are using service , because it gives us flexibillity and the ability to inject other services */
  { path: '', redirectTo: '/events', pathMatch: 'full' } // if the path is empty or the user is in the root of our site
  //redirect to /events and the path is full , wich means absolute path with only events keyword
]
