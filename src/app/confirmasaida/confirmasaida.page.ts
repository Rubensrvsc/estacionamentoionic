import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-confirmasaida',
  templateUrl: './confirmasaida.page.html',
  styleUrls: ['./confirmasaida.page.scss'],
})
export class ConfirmasaidaPage implements OnInit {

  public id_sai_num: Number;

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,private authService: AuthService) { }

  ngOnInit() {

    this.act.params.subscribe(objeto =>{
      this.id_sai_num = objeto['idVaga'];
    });

    console.log(this.id_sai_num);
  }

  vaiListaProprietarios(){
    this.router.navigate(['listaproprietarios']);
  }

}
