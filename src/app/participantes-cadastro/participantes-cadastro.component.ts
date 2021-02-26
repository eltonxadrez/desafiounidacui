import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-participantes-cadastro',
  templateUrl: './participantes-cadastro.component.html',
  styleUrls: ['./participantes-cadastro.component.css']
})
export class ParticipantesCadastroComponent  {

  colaborador = {
    nome: "",
    cpf: ""
  };

  constructor(private service: ParticipanteService){

  }

  salvar(form: NgForm){
    this.service.cadastrar(this.colaborador);

  }

}
