import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  constructor(private http: HttpClient) {}

  async cadastrar(alimento: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    return this.http.post('https://desafio-unidac-apps.herokuapp.com/opcoes', JSON.stringify(alimento), {headers}).toPromise()
  }
  
}
