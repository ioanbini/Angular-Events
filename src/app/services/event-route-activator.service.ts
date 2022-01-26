import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventsService } from './events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  /*DI the eventService and also the Router */
  constructor(private eventService:EventsService,private router:Router) { }

 /* this method is a built in method of the CanActivate interface , here it takes one param (route ) and returns boolean !  */
  canActivate(route: ActivatedRouteSnapshot):boolean {
    const eventExists = !!this.eventService.getEventsbyId(+route.params['id']) //we grab the id from the URL 

    /* in line 13 we check if the eventExists  otherwise if the id is valid , the method returns :boolean !
     we invoke the getEventsbyId method from our service and we pass a parameter of the id and with the + we make it as a number !
     then with the !! we make the expression as boolean */

    if (!eventExists) {
      this.router.navigate(['404']);

      /*here we check if it returns false , hence the event is not exists will navigate the user to the 404 page ,
      otherwise the root canActivate and direct the user to the events page according to its id  */

    }
    return eventExists;
  }
}
