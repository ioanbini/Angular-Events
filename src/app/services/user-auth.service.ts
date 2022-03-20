import { first } from 'rxjs/operators';
import { Form } from '@angular/forms';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { User } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  currentUser: User | any;

  constructor() { }

  /*When we call userLogin we will make a call to the server and log the usen in
  and then we'll set this currentUser property , but just for now we'll use mock up data ! */

  userLogin(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName: userName,
      password: password

    }

  }

  /* Our app is going to want to know if the current user is logged in ! Therefore , isAuthenticated method will returns true if the current user is set  */

  isAuthenticated(): boolean {

    return !!this.currentUser;

  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

  }
}
