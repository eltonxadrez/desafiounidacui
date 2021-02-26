import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes-pesquisa',
  templateUrl: './participantes-pesquisa.component.html',
  styleUrls: ['./participantes-pesquisa.component.css']
})
export class ParticipantesPesquisaComponent {

  colaboradores: any[];

  constructor() {
    this.colaboradores = [
      { tipo: 'DESPESA', descricao: 'Compra de pao', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Jose' },
      { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2019', valor: 80000, pessoa: 'Atacado Brasil' },
      { tipo: 'DESPESA', descricao: 'Software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2019', valor: 80000, pessoa: 'Brasil' }
    ];
  }

}
