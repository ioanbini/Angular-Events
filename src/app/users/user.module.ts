import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutes } from './user-routes';

/* This is a basic lazy loaded Module */





@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    /*here we import the common module because its lazy loaded
     instead of BrowserModule which we are importing in our AppModule */
    CommonModule,
    /*also instead of forRoot here we are using RouterModule.forChild because its lazy loaded
      */
    RouterModule.forChild(UserRoutes)

  ],
  exports: [],
  providers: [],
})
export class UserModule {}
