import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessment: FormGroup | any;

  questions = [
    {type: "name", description : "What is your name ?", isHidden:false},
    {type: "email", description : "What is your email ?", isHidden:true},
    {type: "message", description : "What is your message ?", isHidden:true}
  ]

  ngOnInit() {
    this.assessment = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit() {

  }
}
