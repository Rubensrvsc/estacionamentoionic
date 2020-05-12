import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasProp } from '../services/vagas-proṕ';
import { ApiService } from '../services/api.service';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from '../services/auth.service';
import { MenuController, ToastController } from '@ionic/angular';

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
  public usuario: any;
 
  

  constructor(public act: ActivatedRoute,private api: ApiService,
    private router: Router,private authService: AuthService, private menu: MenuController,
    public toastcontroler: ToastController ){

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

    this.api.getUser().subscribe(
      data=>{
        const res = (data as any);
        this.usuario=res["username"];
        console.log(this.usuario);
      },error=>{
        console.log(error);
      });

    console.log(this.result);
    console.log(this.result3);
  }

  irParaVagaASerOcupada(id_vaga: Number){
    
    this.api.obtemVagaASerConfirmada(id_vaga);
    this.router.navigate(['confirmareserva',id_vaga]);
      
    
  }

  async toast_ja_reservou(){
    const toast = await this.toastcontroler.create({
      message: 'Você já reservou uma vaga',
      duration: 1000
    });

    toast.present();
  }

  openFirst() {
    this.menu.enable(true, 'first2');
    this.menu.open('first2');
  }

  verPerfil(){
    this.router.navigate(['perfil']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['signin']);
  }

}
