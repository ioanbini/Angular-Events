import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public navigateAway: boolean = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events'])
    /* navigate to a page's URL via ts file and not from HTML ,with router.navigate and the path of the URL as parameter  */

  }

  save() {
    this.navigateAway = true;

  }

}
export function canDeactivate(component: CreateEventComponent): boolean {
  /* we are passing as parameter the component and we call a property navigateAway which is by default false and only if the user calls the save method will make it true  */
  const deactivate = component.navigateAway


  if (!deactivate) {
    /* if the deactivate is false it throws a confirm dialog and only if the use presses ok can navigate away , otherwise if the user has allready call the save method and turn
    navigateAway to true can leave the component */
    return window.confirm('You have not save the event ! Do you really want to cancel ? ')

  }
  return deactivate;

}
