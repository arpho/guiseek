import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  talks = [
    { name: 'DevParaná in Academy - Arquitetura orientada a componentes com AngularJS no Instituto Tecnológico Federal do Paraná em Campo mourão - PR - DevParaná ', date: 'Maio de 2017 ' },
    { name: 'XLX Semana cultural da FAFIMAN - Arquitetura orientada a componentes com AngularJS na faculdade Fafiman em Mandaguari - PR - DevParaná ', date: 'Maio de 2017 ' },
    { name: 'Meetup - Mais poder ao HTML com AngularJS na faculdade Alfa em Umuarama - PR - DevParaná ', date: 'Outubro de 2016 ' },
    { name: 'ES6 com AngularJS 1.x para Semana da computação na UTFPR em Campo Mourão - PR ', date: 'Setembro de 2016 ' },
    { name: 'Minicurso de AngularJS para alunos da Fafiman em Mandaguari - PR ', date: 'Junho de 2016 ' },
    { name: 'Módulo M.E.A.N para Pós graduação da Unoesc em Chapecó - SC (Backend e Frontend) ', date: 'Fereveiro de 2016 ' },
    { name: 'HTML, CSS, JavaScript e AngularJS (Curso de nivelamento para uso do framework Gumga) ', date: 'Janeiro de 2016' },
    { name: 'Meetup - Mais poder ao HTML com AngularJS na faculdade Cidade Verde em Maringá - PR - DevParaná ', date: 'Novembro de 2015 ' },
    { name: 'MongoDB, Express, AngularJS e NodeJS (Palestra na Semana acadêmica 2015 - Fatecie) ', date: 'Setembro de 2015 ' },
    { name: 'Atualizando Sistemas Web com AngularJS (Palestra na II semana da computação Uningá) ', date: 'Setembro de 2015 ' },
    { name: 'Aplicações Web com Silex, Twitter Bootstrap e jQuery ( Minicurso na semana da informática do Unicesumar) ', date: 'Outubro de 2014 ' },
    { name: 'Introdução ao PHP (Monitoria para os alunos do 2 ano de Sistemas para Internet) ', date: 'Junho de 2014 ' },
    { name: 'Web Off-line (Seminário sobre Aplicações web com Application Cache e Storage) ', date: 'Outubro de 2013' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
