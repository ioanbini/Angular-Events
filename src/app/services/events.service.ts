import { Injectable } from '@angular/core';
import { events } from 'src/assets/mockup-events';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }


  getEvents() {
    const subject = new Subject() //create a new Subject() observable

    /*setTimeout method to make it act like they data come asynchronously */
    setTimeout(() => {
      subject.next(events); subject.complete(); //we are adding data tho the observable stream


    }, 100); //after 100 ms we are adding data to the stream

    return subject ; // here we return the observable

  }

  getEventsbyId(id:number) {
    const event = events.find(event => event.id === id);
    return event;

  }

}
