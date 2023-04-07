import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  animate,
  animateChild,
  animation,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import RisingGenAssessment from '../../assets/RisingGenAssessment.json';
import { QuestionGroup } from '../models/question-group.model';
import { MatRadioChange } from '@angular/material/radio';

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
  assessmentForm: FormGroup | any;
  loadQuestion:boolean = true;
  assessment: QuestionGroup[] | any;
  assessmentType: string | any;
  questionGroup: QuestionGroup | any;
  currentQuestion: any;
  questionAnswered: boolean = false;
  hasSubQuestions: boolean = false;
  formComplete: boolean = false;
  questionGroupIndex: number = 0;
  
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.assessmentType = params['assessmentType'];
    });

    this.assessment = this.assessmentType === 'rising-gen' ? RisingGenAssessment.questions : null;
    this.questionGroup = this.assessment[this.questionGroupIndex];
    let group: { [key: string]: any } = {}; 

    // this.questions.forEach(q => {

    //   if (q.subQuestions.length > 0) {
    //     q.subQuestions.forEach(sq => {
    //       const key: string = `question${sq.order.toString()}`;
    //       group[key] = new FormControl(Validators.required);  
    //     })
    //   } else {
    //     const key: string = `question${q.order.toString()}`;
    //     group[key] = new FormControl(Validators.required);  
    //   }
    // });
    this.assessmentForm = new FormGroup(group);
  }

  onSubmit() {

  }

  nextQuestion() {
    const currIndex = this.questionGroup.questionList.indexOf(this.currentQuestion);
    this.questionGroup.questionList[currIndex].isHidden = true;

    if (currIndex + 1 === this.questionGroup.questionList.length) {
      if (this.questionGroupIndex + 1 === this.assessment.length) {
        this.formComplete = true;
      }
      else {
        this.questionGroupIndex++; 
        this.questionGroup = this.assessment[this.questionGroupIndex];
      }
    }
    const nextQuestion = this.questionGroup.questionList[currIndex + 1];
    nextQuestion.isHidden = false;
    this.questionAnswered = false;
  }

  questionSelected(event: MatRadioChange, question: any){
    this.currentQuestion = question;
    this.questionAnswered = event.source.checked;
  }
}
