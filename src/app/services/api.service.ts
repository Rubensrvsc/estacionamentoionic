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

}
