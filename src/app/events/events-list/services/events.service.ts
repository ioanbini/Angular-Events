import { Injectable } from '@angular/core';
import { events } from 'src/assets/mockup-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }


  getEvents() {

    return events ;

  }

  getEventsbyId(id:number) {
    const event = events.find(event => event.id === id);
    return event;

  }

}
