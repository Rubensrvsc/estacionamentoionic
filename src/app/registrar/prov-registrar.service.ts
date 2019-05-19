import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProvRegistrarService {

  private url = 'https://localhost:8000/';

  constructor(public http: Http) { }

  registrarUsuario(nome: string,idade: number, email: string, senha: string){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let posData={
      "nome":nome,
      "idade":idade,
      "email":email,
      "senha":senha
    }
    this.http.post('https://localhost:80/registrar_cliente',posData,requestOptions).subscribe(
    data => {
      console.log(data);
     }, error => {
      console.log(error);
    });;

  }

}
