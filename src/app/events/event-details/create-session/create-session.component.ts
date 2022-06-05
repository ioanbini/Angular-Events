import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedWords } from 'src/app/shared/validators/restrictedWords.validator';
import { iSession } from '../../event.model';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  newSessionForm!: FormGroup
  name!: FormControl
  present!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl

  constructor() {

  }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.present = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(20), restrictedWords(['example', 'foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      present: this.present,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract

    })

  }



  saveSession(formValue: any) {
    let iSession: iSession = {
      id: undefined,
      name: formValue.name,
      presenter: formValue.present,
      duration: formValue.duration,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []
    }
    this.saveNewSession.emit(iSession)
    //the event that will emited it is actually our session object

  }

  cancel () {
    this.cancelAddSession.emit()
  }

}
