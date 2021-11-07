import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter()

  constructor() { }


  ngOnInit(): void {
  }

  handleClickMe(eventID:any) {
    const event = eventID
    this.eventClick.emit(event);

  }

}
