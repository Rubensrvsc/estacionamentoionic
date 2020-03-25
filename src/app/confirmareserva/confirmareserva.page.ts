import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Vagaaserocupada} from '../services/vagaaserocupada';

@Component({
  selector: 'app-confirmareserva',
  templateUrl: './confirmareserva.page.html',
  styleUrls: ['./confirmareserva.page.scss'],
})
export class ConfirmareservaPage implements OnInit {

  public vaga_id: Number;
  public Vaga = new Array<Vagaaserocupada>();
  public error: any;

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router) { }

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
    
  }

}
