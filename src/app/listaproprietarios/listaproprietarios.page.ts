import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {VagasProp} from '../services/vagas-proṕ';
import { NavController } from '@ionic/angular';
import { ConfirmareservaPage } from '../confirmareserva/confirmareserva.page';





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
  

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    return this.api.obtemNomesProps().subscribe(
      data=>{
        this.lista_prop = (data as any);
        console.log(this.lista_prop);
     },error=>{
        console.log(error);
     }
    )
  }

  ngAfterViewInit(){
  this.api.obtemVagasProp2(1).subscribe(res=>{
    this.result2.push(res);
    //console.log(this.result2);
  });
  
  console.log(this.result2);
  

  
  this.result3=this.result2;
  console.log(typeof(this.result3));
  

 
  
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

  vaiVagasTeste(id_prop: Number){
    this.router.navigate(['listavagasprop',id_prop]);
  }

}
