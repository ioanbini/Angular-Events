import { OnInit ,ElementRef, Input} from '@angular/core';
import { Directive } from '@angular/core';

declare var $ : any;


@Directive({
  selector: '[ModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input() ModalTrigger!:string ;

  private el:HTMLElement;

  constructor(private elRef:ElementRef) { 
    this.el=this.elRef.nativeElement
  }

  ngOnInit(): void {
    this.el.addEventListener('click', event => {
      $(`#${this.ModalTrigger}`).modal({})

    })
    
  }

}
