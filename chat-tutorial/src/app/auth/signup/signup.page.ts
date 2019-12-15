import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  loading = false;
  login: { email: string; password: string } = { email: null, password: null };
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    this.loading = true;
    this.authService
      .authSignUp(this.login)
      .finally(() => (this.loading = false));
  }
}
