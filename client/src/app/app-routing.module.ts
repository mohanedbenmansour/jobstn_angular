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
import { EnterpriseAddPostComponent } from './components/enterprise-add-post/enterprise-add-post.component';
import { EnterpriseViewPostComponent } from './components/enterprise-view-post/enterprise-view-post.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { AdminPostsListComponent } from './components/admin-posts-list/admin-posts-list.component';
import { AdminReportListComponent } from './components/admin-report-list/admin-report-list.component';
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
  {
    path: 'enterpriseposts',
    component: EnterprisePageComponent,
    children: [{ path: '', component: EnterpriseViewPostComponent }],
  },
  {
    path: 'addposts',
    component: EnterprisePageComponent,
    children: [{ path: '', component: EnterpriseAddPostComponent }],
  },
  {
    path: 'enterprisesettings',
    component: EnterprisePageComponent,
    children: [{ path: '', component: ApplicantSettingsComponent }],
  },
  {
    path: 'adminuserslist',
    component: AdminDashboardComponent,
    children: [{ path: '', component: AdminUsersListComponent }],
  },
  {
    path: 'adminpostslist',
    component: AdminDashboardComponent,
    children: [{ path: '', component: AdminPostsListComponent }],
  },
  {
    path: 'adminreportlist',
    component: AdminDashboardComponent,
    children: [{ path: '', component: AdminReportListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
