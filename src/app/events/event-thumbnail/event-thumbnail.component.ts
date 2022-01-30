import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Events } from '../event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: Events|undefined;
  @Output() eventClick = new EventEmitter()  /*eventClick => is an event Emitter */

  constructor() { }


  ngOnInit(): void {
  }

  handleClickMe(eventID:any) {
    const event = eventID
    this.eventClick.emit(event);

  }

}
