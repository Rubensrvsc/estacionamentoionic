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
  public usuario: any;
  

  constructor(private api: ApiService, private authService: AuthService,
    private router: Router) {}

    ngAfterViewInit(){
      return this.api.getUser().subscribe(
        data=>{
          const res = (data as any);
          console.log(res)
          this.usuario=res["username"];
        },error=>{
          console.log(error);
        });
    }

    ngOnInit(){
     return this.api.getVagas().subscribe(
       data=>{
          const response = (data as any);
          console.log(response);
          this.lista_vagas = response;
          console.log(this.lista_vagas);
       },error=>{
          console.log(error);
       })

    }

   

    logout(){
      this.authService.logout();
      this.router.navigate(['login']);
    }


}
