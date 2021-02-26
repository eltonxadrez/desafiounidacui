import { Component, OnInit } from '@angular/core';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-participantes-pesquisa',
  templateUrl: './participantes-pesquisa.component.html',
  styleUrls: ['./participantes-pesquisa.component.css']
})
export class ParticipantesPesquisaComponent implements OnInit {

  colaboradores: any;

  constructor(private service: ParticipanteService) {
    
  }
  
  ngOnInit(){
    this.listar();
  }

  async listar() {
    this.service.listar().then(response => {
      this.colaboradores = response;
    })
  }

}
