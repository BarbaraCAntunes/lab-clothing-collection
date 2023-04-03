import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { PreLoginPagesComponent } from './pages/pre-login-layout/pre-login-pages/pre-login-pages.component';
import { LoginComponent } from './pages/pre-login-layout/login/login.component';
import { ForgotPasswordComponent } from './pages/pre-login-layout/forgot-password/forgot-password.component';
import { RegisterNewUserComponent } from './pages/pre-login-layout/register-new-user/register-new-user.component';
import { PostLoginPagesComponent } from './pages/post-login-layout/post-login-pages/post-login-pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PreLoginPagesComponent },
  { path: 'forgot-password', component: PreLoginPagesComponent },
  { path: 'register-new-user', component: PreLoginPagesComponent },
  {
    path: 'home',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'collections',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clothing-model',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-collection',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-clothing-model',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-clothing-model/:id',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-collection/:id',
    component: PostLoginPagesComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
