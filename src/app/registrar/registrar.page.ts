import { Component, OnInit } from '@angular/core';
import { ProvRegistrarService } from './prov-registrar.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  providers: [ProvRegistrarService]
})
export class RegistrarPage implements OnInit {

  constructor(private prov_r: ProvRegistrarService) { }

  ngOnInit() {
  }

  registrar(nome: string,idade: number, email: string, senha: string){
    this.prov_r.registrarUsuario(nome,idade,email,senha);
  }

}
