import { ParticipanteService } from './participante.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantesPesquisaComponent } from './participantes-pesquisa/participantes-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticipantesCadastroComponent } from './participantes-cadastro/participantes-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OpcaoAlimentoCadastroComponent } from './opcao-alimento-cadastro/opcao-alimento-cadastro.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesPesquisaComponent,
    NavbarComponent,
    ParticipantesCadastroComponent,
    OpcaoAlimentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    InputTextModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [ParticipanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
