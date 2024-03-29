import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  mouseOverLogin!: boolean
  loginInvalid: boolean = false;

  constructor(private userAuth: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //#loginForm template's local variable which represents our form
  login(loginFormValues: any) {
    this.userAuth.userLogin(loginFormValues.userName, loginFormValues.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;

        }
        else {
          this.router.navigateByUrl('/events');
        }
      });

  }

}
