import { Subject } from 'rxjs';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services';
import { iSession } from './../../events/event.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = '';
  foundSessions: iSession[] |any = [];

  constructor(public authService: UserAuthService, private eventsService: EventsService) { 
  }

  ngOnInit(): void {

  }

  isUserAuthenticated(): boolean {
    const isUserAuth = this.authService.isAuthenticated();
    if (!isUserAuth) {
      return isUserAuth;
    }
    return isUserAuth;

  }

  searchSessions(searchTerm: string) {

    this.eventsService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }
}
