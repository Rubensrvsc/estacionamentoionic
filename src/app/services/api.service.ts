import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime,
  distinctUntilChanged,
  switchMap,
  tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {VagasProp} from './vagas-proṕ';
import {Vagaaserocupada} from './vagaaserocupada';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  public result: any;
  public result2: any;

  //public VagasProp = new Array<JSON>();
  

  private api_root = 'http://localhost:8000/';
  //nome_cli=this.getUser();

  constructor(private http: HttpClient) { }

  getVagas(){
    return this.http.get(this.api_root.concat('vervagas/'));
  }

  getUser(){
    return this.http.get(this.api_root.concat('auth/user/'));
  }

  getClienteVagaUser(){
    return this.http.get(this.api_root.concat('mostraclientevaga/'));
  }

  reservaVaga(idVaga: Number, nome_cli: String){
    const json_reserva_vaga = {vaga:idVaga,cliente:nome_cli};
    const vaga_ja_reservada=this.http.post(this.api_root.concat('clientevagacreate/'),json_reserva_vaga).toPromise().
    then(response => response.json());
    
    /*const teste_vaga_erro = this.http.post(this.api_root.concat('clientevagacreate/'),json_reserva_vaga).toPromise().
    then(response => response.json());

    console.log(teste_vaga_erro);*/
    console.log(nome_cli);
    console.log(idVaga);
    return vaga_ja_reservada;
   
    //console.log(vaga_ja_reservada.alert-onmessage);
  }

  sairVaga(idVaga: Number){
      const json_vaga={vaga_cliente:idVaga}
      this.http.put(this.api_root.concat('clientesaidavaga/'),json_vaga).toPromise().
      then(resposta => resposta.json());
      //console.log(nome_cli);
      console.log(idVaga);
  }

  obtemNomesProps(){
    return this.http.get(this.api_root.concat('mostranomeprop/'));
  }

  obtemVagasProp(id_prop: Number){
    console.log(id_prop);
    const vagas=this.http.get(this.api_root.concat(`mostravagasprop/${id_prop}/`)).toPromise();
    console.log(vagas);
    
  }

  obtemVagasProp2(id_prop: Number): Observable<VagasProp[]>{
    const vgs = this.http.get<VagasProp[]>(this.api_root.concat(`obtemvagasprop/${id_prop}/`));
    return vgs;
    /*return vgs.pipe(
      map(res => {
        return res.json().map(item => {
          console.log(item);
        });
      })
    );*/
  }

  obtemVagaASerConfirmada(id_vaga: Number): Observable<Vagaaserocupada[]>{
    const vaga = this.http.get<Vagaaserocupada[]>(
      this.api_root.concat(`obtemvagaaserocupada/${id_vaga}/`)
    );
    return vaga;
  }

  getVaga(result){
    
    this.result2= result;
    console.log(this.result2);
    return this.result2;

  }

}
