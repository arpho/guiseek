import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [
    { year: '2017', name: 'GDG DevFest Paraná 2017', place: 'GDG Paraná && DevParaná', link: 'Organização, Assistir o vídeo' },
    { year: '2017', name: 'DevParaná Conf 2017', place: 'DevParaná', link: 'Organização, Assistir o vídeo' },
    { year: '2016', name: 'DevParaná Conf 2016', place: 'DevParaná', link: 'Organização, Assistir o vídeo' },
    { year: '2016', name: 'Meetup DevParaná', place: 'DevParaná', link: 'Organização' },
    { year: '2016', name: 'BrazilJS Conf 2016', place: 'BrazilJS' },
    { year: '2016', name: 'Meetup DevParaná', place: 'DevParaná', link: 'Organização' },
    { year: '2016', name: 'Meetup DevParaná', place: 'DevParaná', link: 'Organização' },
    { year: '2015', name: 'Meetup DevParaná', place: 'DevParaná', link: 'Organização e Palestra' },
    { year: '2015', name: 'BrazilJS Conf 2015', place: 'BrazilJS' },
    { year: '2014', name: 'BrazilJS Conf 2014', place: 'BrazilJS' },
    { year: '2013', name: 'BrazilJS Conf 2013', place: 'BrazilJS' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
