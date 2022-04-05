import { Component, Input, OnInit } from '@angular/core';
import { iSession } from '../../event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: iSession[] | any = [] ;

  constructor() { }

  ngOnInit(): void {
  }

}
