import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/autentificacion/dashboard/dashboard.component';
import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';
import { AuthService } from "./shared/services/auth.service";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule { }
