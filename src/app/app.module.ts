import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EventsAppComponent } from './events-app.component';

/* Summarizes all the imports , hence we have cleaner code */
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  UserAuthService,
  CreateSessionComponent

} from './events/index';

import { NavbarComponent } from './nav/navbar/navbar.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { canDeactivate, CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-page.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,

  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [
    EventsService,
    UserAuthService,
    EventsListResolverService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivate',
      useValue: canDeactivate
      //we provide (reference) the string canDeactivate and we are using the function canDeactivate as useValue
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
