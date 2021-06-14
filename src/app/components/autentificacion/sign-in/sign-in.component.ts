import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService, private routes: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user') !==null) {
      this.routes.navigate(['/dashboard']);
    }
  }

  loggedIn(userName: any, userPassword: any) {
    this.authService.SignIn(userName, userPassword);
  }
}
