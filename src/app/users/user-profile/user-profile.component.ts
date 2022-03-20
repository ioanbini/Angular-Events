import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profileForm!: FormGroup;
  lastName: FormControl;
  firstName: FormControl;

  constructor(private authService: UserAuthService, private router: Router) {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required ,Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required ,Validators.pattern('[a-zA-z].*')]);
  }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })

  }
  lastNameValidation() :boolean {
   return this.lastName.invalid && this.lastName.touched
  }

  firstNameValidation(): boolean {
    return this.firstName.invalid && this.firstName.touched

  }


  saveProfile(formValues: any): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events'])
    }

  }

  cancel(): void {
    this.router.navigate(['events'])
  }


}
