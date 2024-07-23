import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Cocktail } from './interfaces/cocktail.interface';
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-details/cocktail-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CocktailListComponent, CocktailDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
