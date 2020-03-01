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
  public usuario: any;

  constructor(private api: ApiService) { }

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

    sairVaga(){
      console.log("sair da vaga");
    }

}
