import { Form, NgForm } from '@angular/forms';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public navigateAway: boolean = false;
  public newEvent!: Events


  constructor(private router:Router,private eventService:EventsService) { }

  ngOnInit(): void {
  }


  saveEvent(formValue: Events) {

    this.eventService.saveEvent(formValue)
    this.navigateAway = true;
    this.router.navigate(['/events'])
    console.log(formValue)
  }

  cancel(formInstance: NgForm) {
    console.log(formInstance)
    if (formInstance.pristine) {
      this.navigateAway=true
    }
    this.router.navigate(['/events'])
    /* navigate to a page's URL via ts file and not from HTML ,with router.navigate and the path of the URL as parameter  */

  }

}
export function canDeactivate(component: CreateEventComponent): boolean {
  /* we are passing as parameter the component and we call a property navigateAway which is by default false and only if the user calls the save method will make it true  */
  const deactivate = component.navigateAway

  if (!deactivate) {
    /* if the deactivate is false it throws a confirm dialog and only if the use presses ok can navigate away , otherwise if the user has allready call the save method and turn
    navigateAway to true can leave the component */
    return window.confirm('You have not create the event ! Do you really want to leave ? ')

  }
  return deactivate;

}
