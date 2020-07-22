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

//ng material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ApplicantPostsComponent } from './components/applicant-posts/applicant-posts.component';
import { ApplicantSettingsComponent } from './components/applicant-settings/applicant-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    ApplicantPageComponent,
    EnterprisePageComponent,
    AdminDashboardComponent,
    ApplicantPostsComponent,
    ApplicantSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
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
