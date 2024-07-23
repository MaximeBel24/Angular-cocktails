import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit{

  @Input() cocktails?: Cocktail[];

  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }


}
