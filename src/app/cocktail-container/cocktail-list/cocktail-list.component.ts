import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from '../../shared/directives/selected.directive';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, SelectedDirective],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  @Input() selectedCocktail!: Cocktail;

  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
