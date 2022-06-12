import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {

  /* @ViewChild() decorator: access to the actual DOM node ,the raw DOM node and we have to give to the element that 
  we want to access a ref tag #example-element (we have to pass in the decorator a string that will be an angular 2 local ref variable )*/

  @Input() title!:string;
  @Input() elementId!:string;
  @ViewChild('modalContainer') containerEl!:ElementRef; 
  //will be initialized with the component to point out to the DOM node with the ref modalContainer! It is just a wrapper to that DOM node 


  constructor() { }

  ngOnInit(): void {
  }


  closeModal() {
    $(this.containerEl.nativeElement).modal('hide');

  }

}
