import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AlimentoService } from '../alimento.service';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-opcao-alimento-cadastro',
  templateUrl: './opcao-alimento-cadastro.component.html',
  styleUrls: ['./opcao-alimento-cadastro.component.css']
})
export class OpcaoAlimentoCadastroComponent implements OnInit {

  participantes: any;

  alimento = {
    nome: "",
    colaborador: {
      codigo: undefined
    }
  }

  constructor(private participanteService: ParticipanteService, private alimentoService: AlimentoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.participanteService.listar().then(response => {
      this.participantes = response;
    })
  }
  
  salvar(form: NgForm){
    this.alimentoService.cadastrar(this.alimento).then(() => {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Salvo com sucesso'});
    }).catch(() => {
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Erro ao salvar alimento'});
    })
  }
}
