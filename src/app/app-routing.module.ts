import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentTypeComponent } from './assessment/assessment-type/assessment-type.component';
import { LandingComponent } from './landing/landing.component';
import { PricingComponent } from './pricing/pricing.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard/course-dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent }, 
  { path: 'assessment', component: AssessmentComponent },
  { path: 'assessment-type', component: AssessmentTypeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'dashboard', component: CourseDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
