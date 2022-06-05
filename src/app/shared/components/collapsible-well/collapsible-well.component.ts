import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent implements OnInit {

  visible: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible

  }

}
