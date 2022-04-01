import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { iSessions } from '../../event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm!:FormGroup
  name!:FormControl
  present!:FormControl;
  duration!:FormControl;
  level!:FormControl;
  abstract!:FormControl

  constructor() {

  }

  ngOnInit(): void {
    this.name = new FormControl('',Validators.required);
    this.present = new FormControl('',Validators.required)
    this.duration = new FormControl('',Validators.required)
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400)]) ;

    this.newSessionForm= new FormGroup ({
      name:this.name,
      present:this.present,
      duration:this.duration,
      level: this.level,
      abstract: this .abstract

    })

  }

  saveSession(formValue:any) {
    let iSession :iSessions = {
      id: undefined,
      name: formValue.name,
      presenter: formValue.present,
      duration: formValue.duration,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []
    }
    console.log(iSession)

  }

}
