import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';



@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: any;


  constructor(private http: EventsService) { }

  ngOnInit(): void {
    this.showEvents();
  }

  showEvents() {
    return this.events = this.http.getEvents();
  }


  handleClickEvent(data: any) {

    this.events.push(data)
  }

}
