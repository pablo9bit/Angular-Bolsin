import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './components/autentificacion/guard.guard';
import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';
import { FormulariosComponent } from './components/bolsin/formularios/formularios.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'dashboard',
    component: FormulariosComponent,
    canActivate: [GuardGuard],
  },
  {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
