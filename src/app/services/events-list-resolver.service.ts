import { Injectable } from '@angular/core';
import {Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventsService } from './events.service';


@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventsService:EventsService) { }
  resolve():Observable<any> {
    return this.eventsService.getEvents().pipe(map(events => events))
    //we are calling map on the observable which gives as access to the events that are passed in on that stream  and then we are just return those events
    //Because this is in a resolver here the subcription is not needed because we need to return the observable to angular so that angular can watch the
    //observable and see when it finishes if we called subscribe here the value that we return will not be the observable because subscribe returns a subscription
    //therefore subscription is no longer needed
    //in this case we are using map which kind of does the same with subscription  in this case and also returns the observable
    //since we are returning the events inside our map method , these events will then get passed allong to the component defined in our root
  }
}


/*Resolve : Allows you to prefetch the necessary data for a component or to do other checks prior to loading the component ! E.g when you get the data asynchronously as it
happens on the real world In our case the resolver will wait for the data to load before it renders and displays the component at all*/
