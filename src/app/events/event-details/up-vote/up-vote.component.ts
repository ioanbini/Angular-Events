import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.scss']
})
export class UpVoteComponent implements OnInit {

  @Input() count!:number;
  @Output() vote= new EventEmitter() ;
  iconColor!:string

  @Input() set voted(value:boolean) {
    this.iconColor=value ?'red' :'white';
  };

  

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if(!this.voted) {
      this.voted=!this.voted
    }
    this.vote.emit({})
  }

}
