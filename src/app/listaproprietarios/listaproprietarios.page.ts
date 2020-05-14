import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {VagasProp} from '../services/vagas-proṕ';
import { NavController } from '@ionic/angular';
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

  public reserva = ConfirmareservaPage;
  public vagaJaAlocada: any;
  public cliente ='';
  

  constructor(private api: ApiService, private router: Router,
    private authService: AuthService, private menu: MenuController) { }

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
    this.router.navigate(['listavagasprop',id_prop]);
  }
  

  logout(){
    this.authService.logout();
    this.router.navigate(['signin']);
  }

  verPerfil(){
    this.router.navigate(['perfil']);
  }

  vagaAlocada(){
    this.api.verVagaJaAlocada(this.cliente).subscribe(res => {
      this.vagaJaAlocada = (res as any);
      console.log(this.vagaJaAlocada);
    }, error=>{
      console.log(error);
    });
  }

}
