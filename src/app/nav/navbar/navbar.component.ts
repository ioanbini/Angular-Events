import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/services';
import { Events, iSession } from './../../events/event.model';
import { EventsService } from './../../services/events.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  searchTerm: string = '';
  availableEvents: Events[] = []
  foundSessions: iSession[] | any = [];
  private subscription = new Subscription()

  constructor(public authService: UserAuthService, private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.subscription.add(this.eventsService.getEvents().subscribe({
      next: (events) => {
        this.availableEvents = events

      },
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  isUserAuthenticated(): boolean {
    const isUserAuth = this.authService.isAuthenticated();
    if (!isUserAuth) {
      return isUserAuth;
    }
    return isUserAuth;

  }

  searchSessions(searchTerm: string) {

    this.subscription.add(this.eventsService.searchSessions(searchTerm)
      .subscribe(sessions => {

        this.foundSessions = sessions;
        console.log(this.foundSessions)
      }));
  }
}
