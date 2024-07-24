import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Subscription } from 'rxjs';
import { SelectedDirective } from '../../shared/directives/selected.directive';

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [CocktailListComponent, CocktailDetailsComponent, SelectedDirective],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss',
})
export class CocktailContainerComponent implements OnInit{

  public selectedCocktail!: Cocktail;
  public cocktails!: Cocktail[];
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService : CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails.subscribe(
        (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
    this.subscription.add(
      this.cocktailService.selectedCocktail.subscribe(
        (selectedCocktail: Cocktail) => {
        this.selectedCocktail = selectedCocktail;
      })
    )
  }

  public selectCocktail(index: number) {
    this.cocktailService.selectCocktail(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
