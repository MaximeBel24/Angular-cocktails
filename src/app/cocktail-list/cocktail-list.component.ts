import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit{

  cocktails: Cocktail[] = [
    {
      name: "Mojito",
      img:"https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg",
      description:"Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"
    },
    {
      name : "Cosmopolitain",
      img : "",
      description : ""
    },
    {
      name : "Mai Tai",
      img : "",
      description : ""
    }
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
