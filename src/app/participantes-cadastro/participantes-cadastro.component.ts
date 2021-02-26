import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
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

  constructor(private service: ParticipanteService, private messageService: MessageService){

  }

  salvar(form: NgForm){
    this.service.cadastrar(this.colaborador).then(() => {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Salvo com sucesso'});
    }).catch(() => {
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Erro ao salvar colaborador'});
    })
  }

}
