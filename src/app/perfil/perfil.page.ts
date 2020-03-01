import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { repeat } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public lista_vagas_cliente = new Array<any>();
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {

    return this.api.getClienteVagaUser().subscribe(
      data=>{
        const response = (data as any);
        this.lista_vagas_cliente = response;
        console.log(this.lista_vagas_cliente);
      }
    )
  }

}
