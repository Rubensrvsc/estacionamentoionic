import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import {Vagaaserocupada} from '../services/vagaaserocupada';


@Component({
  selector: 'app-confirmasaida',
  templateUrl: './confirmasaida.page.html',
  styleUrls: ['./confirmasaida.page.scss'],
})
export class ConfirmasaidaPage implements OnInit {

  public id_sai_num: Number;
  public Vaga = new Array<Vagaaserocupada>();
  public error: any;

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,private authService: AuthService
    ,public toastcontroler: ToastController) { }

  ngOnInit() {

    this.act.params.subscribe(objeto =>{
      this.id_sai_num = objeto['idVaga'];
    });

    console.log(this.id_sai_num);
  }

  ngAfterViewInit(){
    this.api.obtemVagaASerConfirmada(this.id_sai_num).subscribe(res => {
      this.Vaga = (res as any);
      console.log(this.Vaga);
    },error=>{
      console.log(error);
    });
  }

  vaiListaProprietarios(){
    this.router.navigate(['listaproprietarios']);
  }

  sairVaga(){
    console.log("sair da vaga",this.id_sai_num);
    this.api.sairVaga(this.id_sai_num);
    this.toast_sair_vaga();
    this.router.navigate(['listaproprietarios']);
    
  }

async toast_sair_vaga(){
  const toast = await this.toastcontroler.create({
    message: 'Saiu da vaga com sucesso',
    duration:2000
  });

  toast.present();
}

}
