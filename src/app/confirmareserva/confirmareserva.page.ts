import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Vagaaserocupada} from '../services/vagaaserocupada';
import { ToastController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-confirmareserva',
  templateUrl: './confirmareserva.page.html',
  styleUrls: ['./confirmareserva.page.scss'],
})
export class ConfirmareservaPage implements OnInit {

  public vaga_id: Number;
  public Vaga = new Array<Vagaaserocupada>();
  public error: any;
  public usuario: any;

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,public toastcontroler: ToastController,
    private authService: AuthService, private menu: MenuController) {
      
     }

  ngOnInit() {

    

    this.act.params.subscribe(objeto =>{
      this.vaga_id = objeto['id_vaga'];
    });

    console.log(this.vaga_id);

  }

  ngAfterViewInit(){
    this.api.obtemVagaASerConfirmada(this.vaga_id).subscribe(res =>{
      this.Vaga = (res as any);
      console.log(this.Vaga);
    },
    error=>{
      console.log(error);
    }
    );

    this.api.getUser().subscribe(
      data=>{
        const res = (data as any);
        this.usuario=res["username"];
        console.log(this.usuario);
      },error=>{
        console.log(error);
      });
    
  }

  resvaga(idVaga: Number){
    //this.api.reservaVaga(idVaga,this.usuario);
    
    console.log(idVaga);
    console.log(this.usuario);
    this.toast_home();
    this.router.navigate(['perfil']);
  }

  async toast_home(){
    const toast = await this.toastcontroler.create({
      message: 'Vaga reservada com sucesso',
      duration:2000
    });

    toast.present();
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
