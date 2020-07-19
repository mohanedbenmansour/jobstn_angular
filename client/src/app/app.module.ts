import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

import { FormsModule } from '@angular/forms';

import { ApplicantPageComponent } from './components/applicant-page/applicant-page.component';
import { EnterprisePageComponent } from './components/enterprise-page/enterprise-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    ApplicantPageComponent,
    EnterprisePageComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [
    PostService,
    UserService,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
