import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CollapsibleWellComponent, SimpleModalComponent } from '../shared-functioanallity-lib';
import { Error404Component } from './errors/error-page.component';
import { EventsAppComponent } from './events-app.component';
import { canDeactivate, CreateEventComponent } from './events/create-event/create-event.component';
import { SessionListComponent, UpVoteComponent } from './events/index';
/* Summarizes all the imports , hence we have cleaner code */
import {
  CreateSessionComponent, EventDetailsComponent,
  EventResolverService, EventsListComponent, EventsListResolverService, EventsService, EventThumbnailComponent, UserAuthService
} from './events/index';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { routes } from './routes';
import { LocationValidatorDirective, ModalTriggerDirective } from './shared/index';



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
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective,
    UpVoteComponent

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [
    EventsService,
    UserAuthService,
    EventsListResolverService,
    //sorthand for { provide:EventsListResolverService , useClass:EventsListResolverService}
    EventResolverService,
    {
      provide: 'canDeactivate',
      useValue: canDeactivate
      //we provide (reference) the string canDeactivate and we are using the function canDeactivate as useValue
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
