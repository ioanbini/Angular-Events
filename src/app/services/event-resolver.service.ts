import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {
  //A resolver automatically subscribes to an observable call that it gets.
  //Angular has a build in functionallity that in a resolver any observable that it gets it will subscribe to itself 
  //therefore here we do not have to make a subscribe call 
  //in every other case we had to subscribe to the observable otherwise the observable will never make the call 
  // until somebody subscribes to that observable 
  constructor(private eventsService:EventsService ) { }
  resolve(route :ActivatedRouteSnapshot):Observable<any> {
    return this.eventsService.getEventById(route.params['id']);
    
  }
}
