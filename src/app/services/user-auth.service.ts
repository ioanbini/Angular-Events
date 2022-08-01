import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  currentUser: User | any;

  constructor(private http: HttpClient) { }

  /*When we call userLogin we will make a call to the server and log the usen in
  and then we'll set this currentUser property , but just for now we'll use mock up data ! */

  userLogin(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password: password
    }
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap((data: any) => {
        this.currentUser = <User>data['user']
      }))
      .pipe(catchError(err=> {
        return of(false)
      }))


    // this.currentUser = {
    //   id: 1,
    //   firstName: 'John',
    //   lastName: 'Papa',
    //   userName: userName,
    //   password: password

    // }

  }

  /* Our app is going to want to know if the current user is logged in ! Therefore , isAuthenticated method will returns true if the current user is set  */

  isAuthenticated(): boolean {

    return !!this.currentUser;

  }
//one way 
  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser=<User>data;
      }
    })).subscribe()
  }

  //second way

  // checkAuthenticationStatus() {
  //   this.http.get('/api/currentIdentity')
  //   .subscribe(data => {
  //     if(data instanceof Object) {
  //       this.currentUser=<User>data;
  //     }
  //   })
  // }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
   return this.http.put(`/api/users/${this.currentUser.id}`,this.currentUser,options)

  }

  logout() {
    this.currentUser=undefined;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post('/api/logout',{},options)

  }
}
