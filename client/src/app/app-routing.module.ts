import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ApplicantPageComponent } from './components/applicant-page/applicant-page.component';
import { EnterprisePageComponent } from './components/enterprise-page/enterprise-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApplicantSettingsComponent } from './components/applicant-settings/applicant-settings.component';
import { ApplicantPostsComponent } from './components/applicant-posts/applicant-posts.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path: 'signup',
    component: HomePageComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'signin',
    component: HomePageComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'home',
    component: ApplicantPageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'applicant',
    },
  },
  {
    path: 'enterprise',
    component: EnterprisePageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'enterprise',
    },
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin',
    },
  },
  {
    path: 'applicantposts',
    component: ApplicantPageComponent,
    children: [{ path: '', component: ApplicantPostsComponent }],
  },
  {
    path: 'applicantsettings',
    component: ApplicantPageComponent,
    children: [{ path: '', component: ApplicantSettingsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
