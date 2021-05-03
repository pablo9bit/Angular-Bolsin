import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/autentificacion/dashboard/dashboard.component';
import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';
import { FormulariosComponent } from './components/bolsin/formularios/formularios.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: FormulariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
