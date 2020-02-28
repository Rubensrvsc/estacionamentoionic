import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

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
    private router: Router,public toastcontroler: ToastController) {}

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

    reservarVaga(idVaga: Number){
      this.api.reservaVaga(idVaga,this.usuario);
      this.toast_home();
    }

    async toast_home(){
      const toast = await this.toastcontroler.create({
        message: 'Vaga reservada com sucesso',
        duration:2000
      });

      toast.present();
    }

    verPerfil(){
      this.router.navigate(['perfil']);
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['signin']);
    }


}
