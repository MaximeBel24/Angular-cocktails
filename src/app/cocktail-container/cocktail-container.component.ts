import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [CocktailListComponent, CocktailDetailsComponent],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent {

  cocktails: Cocktail[] = [
    {
      name: "Mojito",
      img:"https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg",
      description:"Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"
    },
    {
      name : "Cosmopolitain",
      img : "https://vodka-miam.fr/cdn/shop/articles/Cosmopolitain.jpg?v=1662119418",
      description : "Cocktail léger, alcoolisé, fruité, de couleur rose attrayante, il connait un succès féminin international (Girl drinks)[réf. nécessaire]. Son nom fait référence au Cosmopolitisme Universel. Sa recette est une variante des martinis, Cape Codder (vodka, jus de canneberge, citron vert), Margarita, et Gin Daisy1 (short drinks avec un alcool fort, sirop de grenadine, jus de citron, soda, et verre à Martini)."
    },
    {
      name : "Mai Tai",
      img : "https://www.cocktail.fr/wp-content/uploads/2017/05/mai-tai.jpg",
      description : "Le Mai Tai (Maita'i, bon, excellent, le meilleur, en tahitien) est un cocktail de la culture Tiki de la culture polynésienne, à base de rhum, curaçao, orgeat, et jus de citron vert. « Maita'i » est un mot tahitien signifiant bon, excellent, ou le meilleur (sans rapport avec le thaï de Thaïlande). Son créateur Victor Jules Bergeron Jr dit l'avoir créé et fait goûter dans son restaurant à des amis de Tahiti, Ham et Carrie Guild, qui lui auraient alors dit en tahitien « Maita'i roa ae » (le meilleur du monde), et qu'il l'a alors nommé ainsi."
    }
  ];

  public selectedCocktail: Cocktail = this.cocktails[0];

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }

}
