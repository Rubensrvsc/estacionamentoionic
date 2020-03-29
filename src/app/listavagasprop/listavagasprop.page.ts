import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasProp } from '../services/vagas-proṕ';
import { ApiService } from '../services/api.service';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listavagasprop',
  templateUrl: './listavagasprop.page.html',
  styleUrls: ['./listavagasprop.page.scss'],
})
export class ListavagaspropPage implements OnInit {

  public id: Number;
  public result= new Array<VagasProp>();
  public result2= new Array<VagasProp>();
  public result3 = new Array<any>();
 
  

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,private authService: AuthService, private menu: MenuController ){

     }

  ngOnInit() {

    this.act.params.subscribe(objeto =>{
      this.id = objeto['id_prop'];
    });

    console.log(this.id);

  }

  ngAfterViewInit(){
    this.api.obtemVagasProp2(this.id).subscribe(res=>{
      const r = (res as any);
      console.log(r);
      this.result3=r;
      this.result.push(res);
      console.log(this.result);
    });
    console.log(this.result);
    console.log(this.result3);
  }

  irParaVagaASerOcupada(id_vaga: Number){
    this.api.obtemVagaASerConfirmada(id_vaga);
    this.router.navigate(['confirmareserva',id_vaga]);
  }

  openFirst() {
    this.menu.enable(true, 'first2');
    this.menu.open('first2');
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['signin']);
  }

}
