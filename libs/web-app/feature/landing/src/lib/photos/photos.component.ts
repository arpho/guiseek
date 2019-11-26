import { Component, OnInit } from '@angular/core';
const photos = [
  { src: 'guiseek-gucosta.jpg', caption: 'Meu irmão Gustavo Costa' },
  { src: 'guiseek-douglas-crockford.jpg', caption: 'Douglas Crockford!' },
  { src: 'guiseek-guisilva.jpg', caption: 'Bro vários Gui Silva' },
  { src: 'guquinalha-guiseek.jpg', caption: 'Brotheragem Gustavo Quinalha' },
  { src: 'brendan-eich-guiseek.jpg', caption: 'Brendan Eich!!!!!!' },
  { src: 'guiseek-grasel-gucosta-zeno.jpg', caption: 'Grasel, Gu e Zeno' },
  { src: 'guiseek-laurie-voss-npm.jpg', caption: 'Laurie Voss, co-founder do npm' },
  { src: 'loiane-gucosta-guiseek.jpg', caption: 'Amiga Loiane Groner e Gu Costa no BrazilJS' },
  { src: 'dev-parana.jpg', caption: 'DevParaná!' },
  { src: 'guiseek-grasel.jpg', caption: 'Sangue nobre, William Grasel' },
  { src: 'loiane-guiseek.jpg', caption: 'Loiane : )' },
  { src: 'maujor-jaydson-guiseek.jpg', caption: 'Maujor e Jayson no DevParaná' },
  { src: 'gdg-maringa-firebase.gif', caption: 'GDG Maringá' },
  { src: 'guiseek-talk.jpg', caption: 'Talk sobre Angular no 1&ordm; DevParaná' },
  { src: 'zenorocha-guiseek.jpg', caption: 'Zeno' }
]
@Component({
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos = photos
  constructor() { }

  ngOnInit() {
  }

}
