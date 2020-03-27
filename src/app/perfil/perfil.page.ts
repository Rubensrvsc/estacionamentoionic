import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { repeat } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private router: Router,public toastcontroler: ToastController) { }

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

  ngOnInit() {

    return this.api.getClienteVagaUser().subscribe(
      data=>{
        const response = (data as any);
        this.lista_vagas_cliente = response;
        console.log(this.lista_vagas_cliente);
      }
    )
    }

    sairVaga(idVaga: Number){
      console.log("sair da vaga",idVaga);
      //this.api.sairVaga(idVaga);
      this.toast_sair_vaga();
      this.router.navigate(['confirmasaida',idVaga]);
      
    }

  async toast_sair_vaga(){
    const toast = await this.toastcontroler.create({
      message: 'Saiu da vaga com sucesso',
      duration:2000
    });

    toast.present();
  }

  irHome(){
    this.router.navigate(['listaproprietarios']);
  }

  vaiConfirmaSaida(id_vaga: Number){
    this.router.navigate(['listavagasprop',id_vaga]);
  }

}
