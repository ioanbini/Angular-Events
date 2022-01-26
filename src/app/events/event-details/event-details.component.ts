import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../../services/events.service";

@Component({
  selector:'event-details',
  templateUrl: './event-details.component.html',
  styleUrls:['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event:any
  constructor(private eventService:EventsService,private route:ActivatedRoute) {

  }

  ngOnInit() :void{

    this.getEventWithId(+this.route.snapshot.params['id']);
    /*this is how you pull parameters of the URL with route.snapshot.params['id'] , takes the current id from the url and navigates the user to corresponding event's detail page*/

  }


  getEventWithId(id: number) {
    this.event = this.eventService.getEventsbyId(id);
  }

}
