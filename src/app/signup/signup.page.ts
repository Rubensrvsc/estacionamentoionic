import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {



  ngOnInit() {
  }
  error: any;
  public username: string;
  public email: string;
  public password1: string;
  public password2: string;
 

 

 
  private todo : FormGroup;

  constructor( private authService: AuthService,
    private router: Router ) {
    
  }

  signup() {
    console.log("entrou registro");
    this.authService.signup(this.username, this.email, this.password1, this.password2).subscribe(
      success => this.router.navigate(['listaproprietarios']),
      error => this.error = error
    );
  }

  logForm(){
    console.log(this.username);
  }
}
