import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  @Input() cocktail!: Cocktail;

  constructor() {}
}
