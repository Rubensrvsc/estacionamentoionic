import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-listaproprietarios',
  templateUrl: './listaproprietarios.page.html',
  styleUrls: ['./listaproprietarios.page.scss'],
})
export class ListaproprietariosPage implements OnInit {

  public lista_prop = new Array<any>();
  public result= new Array<any>();
  

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




  irParaVagas(prop: Number){
    this.api.obtemVagasProp(prop);
    
    //this.router.navigate(['listavagasprop']);
  }

}
