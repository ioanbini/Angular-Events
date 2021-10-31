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

}
