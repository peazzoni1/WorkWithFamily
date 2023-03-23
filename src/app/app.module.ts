import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PricingComponent } from './pricing/pricing.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CourseDashboardModule } from './course-dashboard/course-dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenubarComponent,
    PricingComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CourseDashboardModule,
    FormsModule, 
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-nhzyxxt2wync13hk.us.auth0.com',
      clientId: 'R0QD5jzLFdKKqvjvAuWcNNV1t1BiF6PR',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/dashboard`
      }
    }),
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
