import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-listaproprietarios',
  templateUrl: './listaproprietarios.page.html',
  styleUrls: ['./listaproprietarios.page.scss'],
})
export class ListaproprietariosPage implements OnInit {

  public lista_prop = new Array<any>();

  constructor(private api: ApiService) { }

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

  irParaVagas(nome_prop: String){
    console.log(nome_prop);
  }

}
