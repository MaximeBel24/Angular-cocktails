import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Cocktail } from './interfaces/cocktail.interface';
import { CocktailListComponent } from "./cocktail-container/cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CocktailListComponent, CocktailDetailsComponent, CocktailContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
