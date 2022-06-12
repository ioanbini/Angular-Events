import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { events } from 'src/assets/mockup-events';
import { Events, iSession } from '../events/event.model';

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

  searchSessions(searchTerm:string) {
    searchTerm.toLocaleLowerCase();
    let results: iSession [] = [];

// we are looking through each of our events 
    events.forEach(event => {
      // and we grab a list of maching sessions from each event with filter , if thery are exist 
      let matchingSessions = event.sessions.filter(session => {
        //filter down to a new list whre the session's name contains the search term we are looking for .indexOf() >-1 ;
        return session.name.toLocaleLowerCase().indexOf(searchTerm) > -1 ; //??
      })

      // now because the sessions do not contain the event id that they belong to ,
      // we are going to add to every maching session the corresponding event id 
      matchingSessions= matchingSessions.map((session:any)=> {
        session.eventId = event.id;
        // and now we will return that session
        return session 
      })

      // now we going to take the empty results array and we are going to add to it the matchingSessions using the concat() with the corresponding 
      //event id that we assigned on the line 61
       results = results.concat(matchingSessions) 
    })
// now we will create an observable and will return it ! basically an event emmiter that will emit our data 
//and we will use the setTimeout to immitate the web request
    let emmiter = new EventEmitter(true);
    setTimeout(() => {
      emmiter.emit(results);
    },200);
    return emmiter
  }
}
