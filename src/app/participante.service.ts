import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ParticipanteService {

  constructor(private http: HttpClient) {}

  consultar(){

    this.http.get('https://desafio-unidac-apps.herokuapp.com/colaboradores')

    .toPromise()
    .then(response => {
      console.log(response)
    }

    )

  }

}

