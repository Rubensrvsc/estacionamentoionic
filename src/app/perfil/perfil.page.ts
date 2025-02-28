import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { repeat } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public lista_vagas_cliente = new Array<any>();
  error: any;
  public usuario: any;

  constructor(private api: ApiService,
    private router: Router,public toastcontroler: ToastController,
    private menu: MenuController,private authService: AuthService) { }

  ngAfterViewInit(){
    return this.api.getUser().subscribe(
      data=>{
        const res = (data as any);
        this.usuario=res["username"];
      },error=>{
        console.log(error);
      });
  }

  ngOnInit() {

    return this.api.getClienteVagaUser().subscribe(
      data=>{
        const response = (data as any);
        this.lista_vagas_cliente = response;
      }
    )
    }

    sairVaga(idVaga: Number){

      
      this.router.navigate(['confirmasaida',idVaga]);
      
    }

  

  irHome(){
    this.router.navigate(['listaproprietarios']);
  }

  vaiConfirmaSaida(id_vaga: Number){
    this.router.navigate(['listavagasprop',id_vaga]);
  }

  verListaProprietarios(){
    this.router.navigate(['listaproprietarios']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['signin']);
  }

  openFirst() {
    this.menu.enable(true, 'first3');
    this.menu.open('first3');
  }

}
