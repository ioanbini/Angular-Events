import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { EventsService } from "../../services/events.service";
import { Events, iSession } from "../event.model";


@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: Events | undefined;
  addMode!: boolean;
  filterBy: string = 'all';
  sortBy:string = 'votes'


  constructor(private eventService: EventsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    /*parameters for the route are actually exposed as an observable 
    this.route.snapshot.params['id] creates a snapshot of the route's param , a fixed copy ,but we are not subscribing to any
    changes ! So if the 'id' changes we don't know about it !
    BUT if we want to navigate from this page to itself to a different ID ,then we've got to listen to the route parameter subscription.
    That's the way we deal with that !
    */
    this.route.params.forEach((params:Params) => {
      this.event=this.eventService.getEventsbyId(+params['id'])
      this.addMode= false;
    })

  }



  addSession() {
    this.addMode = true;

  }

  /**saveNewSession : Adds new Session to the corresponding event and then updates it */

  saveNewSession(session: iSession) {
    /**Because on our create Session form we don't define a session id , so the session id  will be undefined, therefore we need to assing a new session id when
     * it comes in. So we will get the max session ID off of  the sessions on the event and then increament it and assign that to our session ID
    */


    const nextId = Math.max.apply(null, this.event?.sessions?.map(session => session.id) as unknown as number[]);
    /**that should return as the maximum session ID */

    /** then we will just set the ID on our new Session and increment it by one */
    session.id = nextId + 1;

    /** after we increment the id by 1 we will push the new session to the sessions array */
    this.event?.sessions.push(session)

    /** now we have to call update event on our eventService to save this event */
    this.eventService.updateEvent(this.event as Events);
    /** as a final step we will display again the sessions list */
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }

}

