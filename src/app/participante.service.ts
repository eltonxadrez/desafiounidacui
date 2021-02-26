import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ParticipanteService {

  constructor(private http: HttpClient) {}

  async listar() {
    return this.http.get('https://desafio-unidac-apps.herokuapp.com/colaboradores').toPromise();
  }

  async cadastrar(colaborador: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    console.log(JSON.stringify(colaborador));

    return this.http.post('https://desafio-unidac-apps.herokuapp.com/colaboradores', JSON.stringify(colaborador), {headers}).toPromise()
  }

}

