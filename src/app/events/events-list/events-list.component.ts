import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EventsService } from '../../services/events.service';
import { Events } from '../event.model';


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  providers: [ToastrService]
})
export class EventsListComponent implements OnInit, OnDestroy {

  events!: Events[];
  subscription = new Subscription()

  constructor(private http: EventsService, private ToastrService: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showEvents();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }


  showEvents() {
    /* instead of make the subscription here we are using the already existin service EventListResolver which makes the subcription
    and loads the data when they are ready
    */
    this.events = this.route.snapshot.data['events'] //now we are consuming this resolver
    return this.events;

    // const events = this.http.getEvents().subscribe((events) => this.events = events );
    // this.subscription.add(events)
    // return events;

    /*here we subscribe to getEvents() method which returns an observable */
  }

  showToastr(eventName: string): ActiveToast<any> {
    return this.ToastrService.success(eventName);

  }


  handleClickEvent(data: any) {

    this.events.push(data)
  }

}
