import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";


export const UserRoutes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent }

]
