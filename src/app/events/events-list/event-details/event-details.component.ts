import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../services/events.service";

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

  }


  getEventWithId(id: number) {
    this.event = this.eventService.getEventsbyId(id);
  }

}
