import { Component } from '@angular/core';
import { CocktailContainerComponent } from '../cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from '../panier-container/panier-container.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CocktailContainerComponent, PanierContainerComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
