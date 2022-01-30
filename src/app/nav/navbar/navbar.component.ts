import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:UserAuthService) { }

  ngOnInit(): void {

  }

  isUserAuthenticated() :boolean {
    const isUserAuth = this.authService.isAuthenticated()
    if (!isUserAuth) {
      return isUserAuth;
    }
    return isUserAuth;

  }

}
