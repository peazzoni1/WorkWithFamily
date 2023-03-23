import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate,
  animateChild,
  animation,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('nextQuestion', [
      transition(
        'void => *',
        animation([
          style({
            transform: 'translate(200px,0)',
          }),
          animate(
            '0.5s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(0)',
            })
          ),
        ])
      ),
      transition(
        '* => void',
        animation([
          style({ transform: 'translate(0)' }),
          animate(
            '0.5s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(-200px,0)',
            })
          ),
        ])
      ),
    ]),
  ],
})
export class AssessmentComponent implements OnInit {
  assessment: FormGroup | any;
  loadQuestion:boolean = true;
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

  nextQuestion(item: any) {
    const currIndex = this.questions.indexOf(item);
    this.questions[currIndex].isHidden = true;
    this.questions[currIndex + 1].isHidden = false;
  }
}
