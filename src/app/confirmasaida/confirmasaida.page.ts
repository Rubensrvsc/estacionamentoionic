import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastController, MenuController, AlertController } from '@ionic/angular';
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
  public usuario: any;
  public vagaRecemSaida: any;

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,private authService: AuthService
    ,public toastcontroler: ToastController, private menu: MenuController,
    private alertCtrl: AlertController) { }

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

    this.api.getUser().subscribe(
      data=>{
        const res = (data as any);
        console.log(res)
        this.usuario=res["username"];
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
    const vagarecemsada = this.api.vagaRecemSaida(this.usuario,this.id_sai_num);
    vagarecemsada.subscribe(
      data=>{
        this.vagaRecemSaida = (data as any);
        console.log(this.vagaRecemSaida.total_transacao);
        this.presentAlertSaida(this.vagaRecemSaida.total_transacao);
      },error=>{
        console.log(error);
      }
    );
    //this.toast_sair_vaga();
    this.router.navigate(['listaproprietarios']);
    
  }

async toast_sair_vaga(){
  const toast = await this.toastcontroler.create({
    message: 'Saiu da vaga com sucesso',
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

  openFirst() {
    this.menu.enable(true, 'first3');
    this.menu.open('first3');
  }

  async presentAlertSaida(total_transacao: Number){

    console.log("total transação: "+total_transacao);

    if (total_transacao < 1.0){
    const numero_string = total_transacao.toString().split('.')
    if(parseInt(numero_string[1]) === NaN){
      numero_string[1] = '0';
    }
    const alert = await this.alertCtrl.create({
      header: 'Total da transacao',
      //subHeader: 'Subtitle',
      message: `O total gasto foi de ${numero_string[1].substring(2,-3)} centavos`,
      buttons: ['OK']
    });

    await alert.present();
  }
  else if(total_transacao > 0.9){
    const numero_string = total_transacao.toString().split('.')
    if(parseInt(numero_string[1]) === NaN){
      numero_string[1] = '0';
    }
    else if(numero_string[1].length === 1){
      numero_string[1] + '0';
    }
    const alert = await this.alertCtrl.create({
      header: 'Total da transacao',
      //subHeader: 'Subtitle',
      message: `O total gasto foi de ${numero_string[0]} real(is) 
      e ${numero_string[1].substring(2,-3)} centavos`,
      buttons: ['OK']
    });

    await alert.present();
  }
  }

}
