import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {VagasProp} from '../services/vagas-proṕ';
import { NavController, ToastController } from '@ionic/angular';
import { ConfirmareservaPage } from '../confirmareserva/confirmareserva.page';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'app-listaproprietarios',
  templateUrl: './listaproprietarios.page.html',
  styleUrls: ['./listaproprietarios.page.scss'],
})
export class ListaproprietariosPage implements OnInit {

  public lista_prop = new Array<any>();
  public result= new Array<VagasProp>();
  public result2= new Array<VagasProp>();
  public result3 = new Array<any>();
  public v: Boolean;

  public reserva = ConfirmareservaPage;
  public vagaJaAlocada: Number;
  public cliente ='';
  public testevagaalocada = [];
  public vagaAlocadaOuNao=false;

  constructor(private api: ApiService, private router: Router,
    private authService: AuthService, private menu: MenuController
    ,public toastcontroler: ToastController) { }

  ngOnInit() {
    return this.api.obtemNomesProps().subscribe(
      data=>{
        this.lista_prop = (data as any);
        console.log(this.lista_prop);
     },error=>{
        console.log(error);
     });

  }

  ngAfterViewInit(){
  this.api.obtemVagasProp2(1).subscribe(res=>{
    this.result2.push(res);
    //console.log(this.result2);
  });
  
  console.log(this.result2);
  
  this.result3=this.result2;
  console.log(typeof(this.result3)); 

  this.api.getUser().subscribe(
    data=>{
      const res = (data as any);
      this.cliente=res["username"];
      console.log("Cliente: "+this.cliente);
      this.vaga();
    },error=>{
      console.log(error);
    });

    

}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  irParaVagas(prop: Number){
    this.api.obtemVagasProp2(prop).subscribe(res=>{
      const r = (res as any);
      console.log(r);
      this.result3=r;
      this.result.push(res);
      console.log(this.result);
    });
    console.log(this.result);
    console.log(this.result3);
    
    //this.router.navigate(['listavagasprop']);
  }

  vaiVagas(id_prop: Number){
    //this.router.navigate(['listavagasprop',id_prop]);
    if(this.vagaJaAlocada===0){
      //this.vagaAlocadaOuNao=false;
      this.router.navigate(['listavagasprop',id_prop]);
    }
    else if(this.vagaJaAlocada===1){
      this.toast_vaga_alocada();
    }
    //this.vagaAlocada();
    //console.log(this.testevagaalocada);
  }
  

  logout(){
    this.authService.logout();
    this.router.navigate(['signin']);
  }

  verPerfil(){
    this.router.navigate(['perfil']);
  }

  vaga(){
    this.api.verVagaJaAlocada(this.cliente).subscribe(res => {
      this.vagaJaAlocada = (res as any);
      console.log(this.vagaJaAlocada);
      
      //this.testevagaalocada.push(this.vagaJaAlocada);
     
    }, error=>{
      console.log(error);
    });
  }

 

  async toast_vaga_alocada(){
    const toast = await this.toastcontroler.create({
      message: 'Você já tem uma vaga alocada',
      duration:1000
    });
  
    toast.present();
  }

  /* vagaAlocada(){
  
    this.vaga();
   
    if(this.vagaJaAlocada===0){
        //this.vagaAlocadaOuNao=false;
        console.log("Pode ir");
    }
    else if(this.vagaJaAlocada===1){
      this.toast_vaga_alocada();
    }
    
    //console.log(this.vagaAlocadaOuNao);
    //this.testevagaalocada.pop();
    //console.log(this.vagaAlocadaOuNao);
    console.log(this.vagaJaAlocada);

    
  }
  */



}
