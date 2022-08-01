import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Events, iSession } from '../events/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  //OLD GET EVENTS (simulating observable)
  // getEvents() :Observable<Events[]>{ //returns an observable which contains type of events array
  //   const subject = new Subject<Events[]>()  //create a new Subject() observable which is a generic so will define its type
  //   //to contain type of Events array

  //   /*setTimeout method to make it act like they data come asynchronously */
  //   setTimeout(() => {
  //     subject.next(events); subject.complete(); //we are adding data tho the observable stream


  //   }, 100); //after 100 ms we are adding data to the stream

  //   return subject ; // here we return the observable

  // }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`/api/events`)
    .pipe(catchError(this.handleError<Events[]>('getEvents',[])))
  }

  //OLD GET EVENTS BY ID 
  // getEventsbyId(id: number) {
  //   const event = events.find(event => event.id === id);
  //   return event;
  // }

  getEventById(id: number) :Observable<Events>{
    return this.http.get<Events>(`/api/events/${id}`)
    .pipe(catchError(this.handleError<Events>('getEventsById')))

  }

  //OLD IMPLEMENTATION 
  // saveEvent(event: Events) {
  //   event.id = 999
  //   event.sessions = []
  //   events.push(event)
  // }

  saveEvent(event:Events) {
    //post() method parameters: 
    // body : the data that we are sending up
    // options: allows us to do things like set our HTTP headers which will tell to the server what kind of data we are sending up
    let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    //here we are sending up json data
    /* 
    we need to set the type of data that's going to be returned by the post ,
    if we are going to create a new event ,we migh want to get an updated copy of that event from the server 
    because maybe the server set up the id for our event like it is happening in our case
    */
    event.sessions=[]
    return this.http.post<Events>(`/api/events/`,event,options)
    .pipe(catchError(this.handleError<Events>('saveEvent')))
  }

  // OLD IMPLEMENTATION
  // updateEvent(newEvent: Events) {
  //   /** here we need to find the existing event in the events array and replace it for now   */
  //   let index = events.findIndex(event => event.id == newEvent.id)
  //   events[index] = newEvent;
  // }


  updateEvent(event:Events,newEventId:number) {
    let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    //here we are sending up json data
    /* 
    we need to set the type of data that's going to be returned by the post ,
    if we are going to create a new event ,we migh want to get an updated copy of that event from the server 
    because maybe the server set up the id for our event like it is happening in our case
    */
    return this.http.put<Events>(`/api/events/${newEventId}`,event,options)
    .pipe(catchError(this.handleError<Events>('updateEvent')))
    
  }
  searchSessions(searchTerm: string):Observable<iSession[]> {
    return this.http.get<iSession[]>('/api/sessions/search?search='+searchTerm)
    .pipe(catchError(this.handleError<iSession[]>('searchSessions')))
   }


  // OLD IMPLEMENTATION
  // searchSessions(searchTerm: string) {
  //   searchTerm.toLocaleLowerCase();
  //   let results: iSession[] = [];

  //   // we are looking through each of our events 
  //   events.forEach(event => {
  //     // and we grab a list of maching sessions from each event with filter , if thery are exist 
  //     let matchingSessions = event.sessions.filter(session => {
  //       //filter down to a new list whre the session's name contains the search term we are looking for .indexOf() >-1 ;
  //       return session.name.toLocaleLowerCase().indexOf(searchTerm) > -1; //??
  //     })

  //     // now because the sessions do not contain the event id that they belong to ,
  //     // we are going to add to every maching session the corresponding event id 
  //     matchingSessions = matchingSessions.map((session: any) => {
  //       session.eventId = event.id;
  //       // and now we will return that session
  //       return session
  //     })

  //     // now we going to take the empty results array and we are going to add to it the matchingSessions using the concat() with the corresponding 
  //     //event id that we assigned on the line 61
  //     results = results.concat(matchingSessions)
  //   })
  //   // now we will create an observable and will return it ! basically an event emmiter that will emit our data 
  //   //and we will use the setTimeout to immitate the web request
  //   let emmiter = new EventEmitter(true);
  //   setTimeout(() => {
  //     emmiter.emit(results);
  //   }, 200);
  //   return emmiter
  // }




  private handleError<T> (operation ='operation', result?:T) {
    return (error:any) :Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
