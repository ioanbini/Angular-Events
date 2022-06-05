import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { events } from 'src/assets/mockup-events';
import { Events } from '../events/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }


  getEvents() :Observable<Events[]>{ //returns an observable which contains type of events array
    const subject = new Subject<Events[]>()  //create a new Subject() observable which is a generic so will define its type
    //to contain type of Events array

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

  saveEvent(event: Events) {
    event.id = 999
    event.sessions = []
    events.push(event)
  }

  updateEvent(newEvent:Events) {
    /** here we need to find the existing event in the events array and replace it for now   */
    let index = events.findIndex(event => event.id == newEvent.id)
    events[index] = newEvent;
  }

}
