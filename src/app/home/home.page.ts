import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public lista_vagas = new Array<any>();
  error: any;
  

  constructor(private api: ApiService, private authService: AuthService,
    private router: Router) {}


    ngOnInit(){
     return this.api.getVagas().subscribe(
       data=>{
          const response = (data as any);
          console.log(response);
          this.lista_vagas = response;
          console.log(this.lista_vagas);
       },error=>{
          console.log(error);
       }
     )
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['login']);
    }


}
