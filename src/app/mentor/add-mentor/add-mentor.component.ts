import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})
export class AddMentorComponent implements OnInit {
  /** */
  private mentorForm: FormGroup;
  private dateOpts: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    indicateInvalidDate: true,
  };

  constructor(fb: FormBuilder) {
    this.mentorForm = fb.group({
      name: [], 
      lastName: [], 
      nickname: [],
      curp: [], 
      birthday: [null, Validators.required],
      gender: ['female', Validators.required],
      neighborhood: [],
      street: [],
      numberExt: [],
      numberInt: [],
      betweenOne: [],
      betweenTwo: [],      
      schedule: ['morning', Validators.required],
      dinningRoom: [],
      status: ['active', Validators.required],
      shirt: [],
      pants: [],
      shoes: [],
    });
  }

  ngOnInit() {
  }

  onAddMentor(value: string) {
    console.log('you submitted value: ', value);
  }// onSignUp

}
