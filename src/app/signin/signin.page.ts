import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  error: any;
  public email: string;
  public password: string;
  public username: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username);
    this.authService.login(this.username,this.password).subscribe(
      success => this.router.navigate(['home']),
      error => this.error = error
    );
  }

  getSignUp(){
    this.router.navigate(['signup']);
  }

}
