import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_root = 'http://localhost:8000/';

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
    this.http.post(this.api_root.concat('clientevagacreate/'),json_reserva_vaga).toPromise().
    then(response => {return response.json()});
    console.log(nome_cli);
    console.log(idVaga);
  }

  sairVaga(idVaga: Number){

  }

}
