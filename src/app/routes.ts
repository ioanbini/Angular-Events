import { Routes } from '@angular/router';
import {
  EventsListComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventsListResolverService

} from './events/index';
import { Error404Component } from './errors/error-page.component';


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
  { path: '', redirectTo: '/events', pathMatch: 'full' } ,// if the path is empty or the user is in the root of our site
  //redirect to /events and the path is full , wich means absolute path with only events keyword

  /* In order to load the lazy loaded module we are using the loadChidren property ,then we are using  DYNAMIC IMPORT ! So we set it to a function and in that func we will
  use dynamic import to load UserModule (our lazy loaded module). The Dynamic Import will return a promise that contains the module to be imported and also the class that
  this module does export and we need to import , in our case the UserModule class


  /* When a route starts with '/user/...' load the UserModule (class) from this path ('./users/user.module') */

  {
    path: 'user',
    loadChildren: () => import('./users/user.module')
      .then(module => module.UserModule)
  }
]
