import { ParticipanteService } from './participante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private participanteService: ParticipanteService){

  }

  ngOnInit(){
    this.participanteService.consultar();
  }



}
