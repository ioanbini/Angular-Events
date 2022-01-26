import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventsService } from './services/events.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { canDeactivate, CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-page.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventsListResolverService } from './services/events-list-resolver.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    EventsService,
    EventsListResolverService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivate',
      useValue: canDeactivate
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
