import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
      ingredients: [
        { name: 'Perrier', quantity: 1 },
        { name: 'Rhum', quantity: 1 },
        { name: 'Menthe', quantity: 1 },
      ],
    },
    {
      name: 'Cosmopolitain',
      img: 'https://vodka-miam.fr/cdn/shop/articles/Cosmopolitain.jpg?v=1662119418',
      description:
        'Cocktail léger, alcoolisé, fruité, de couleur rose attrayante, il connait un succès féminin international (Girl drinks)[réf. nécessaire]. Son nom fait référence au Cosmopolitisme Universel. Sa recette est une variante des martinis, Cape Codder (vodka, jus de canneberge, citron vert), Margarita, et Gin Daisy1 (short drinks avec un alcool fort, sirop de grenadine, jus de citron, soda, et verre à Martini).',
      ingredients: [
        { name: 'Cranberry', quantity: 1 },
        { name: 'Citron', quantity: 1 },
        { name: 'Vodka', quantity: 1 },
      ],
    },
    {
      name: 'Mai Tai',
      img: 'https://www.cocktail.fr/wp-content/uploads/2017/05/mai-tai.jpg',
      description:
        "Le Mai Tai (Maita'i, bon, excellent, le meilleur, en tahitien) est un cocktail de la culture Tiki de la culture polynésienne, à base de rhum, curaçao, orgeat, et jus de citron vert. « Maita'i » est un mot tahitien signifiant bon, excellent, ou le meilleur (sans rapport avec le thaï de Thaïlande). Son créateur Victor Jules Bergeron Jr dit l'avoir créé et fait goûter dans son restaurant à des amis de Tahiti, Ham et Carrie Guild, qui lui auraient alors dit en tahitien « Maita'i roa ae » (le meilleur du monde), et qu'il l'a alors nommé ainsi.",
      ingredients: [
        { name: 'Rhum', quantity: 1 },
        { name: 'Triple sec', quantity: 1 },
        { name: 'Citron', quantity: 1 },
      ],
    },
    {
      name: 'Piña Colada',
      img: 'https://images.pexels.com/photos/10986589/pexels-photo-10986589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        "La piña colada (piña, ananas, et colada, filtrée, ananas filtré, en espagnol) est un cocktail officiel de l'IBA (International Bartenders Association, en anglais, et Association internationale des barmen, en français), à base de rhum, jus d'ananas et crème de noix de coco, originaire de l’île de Porto Rico des grandes Antilles de la mer des Caraïbes, dont elle est déclarée boisson nationale depuis 1978",
      ingredients: [
        { name: 'Rhum', quantity: 1 },
        { name: 'Jus d\'ananas', quantity: 1 },
        { name: 'Lait de coco', quantity: 1 },
      ],
    },
    {
      name: 'Negroni',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Mojito_1ou2cocktails_cre%CC%81dit.KP_H-1.jpg',
      description:
        'Le cocktail le plus populaire au monde! Le mythique cocktail italien à base de gin, de Campari et de vermouth rouge est né à Florence en 1919. À cette époque, le charismatique comte Cammillo de Negroni avait l’habitude de siroter un Americano (Campari, Vermouth rouge et soda) sur la terrasse du café Casoni. Un beau jour, souhaitant quelque chose de plus puissant, il proposa au barman Fosco Scarelli de remplacer l’eau pétillante par du gin en souvenir de ses voyages en Angleterre. On raconte que le succès fut fulgurant et que par la suite, toute l’aristocratie florentine ne jurait que par le fameux “Americano au gin” du Comte Negroni. Vous connaissez la suite de l’histoire…',
      ingredients: [
        { name: 'Gin', quantity: 1 },
        { name: 'Vermouth rouge', quantity: 1 },
        { name: 'Campari', quantity: 1 },
      ],
    },
    {
      name: 'Old Fashioned',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2015/03/Cocktail_Old_Fashioned_classique_1ou2Cocktails_kp_1OU2COCKTAILS_012120216571_lr.jpg',
      description:
        'Bien qu’il semble facile à réaliser, rares sont ceux qui réussissent à l’exécuter parfaitement. C’est toujours le cocktail que l’on commande quand on veut tester les capacités du bartender. Nous avons nos meilleures adresses, mais quand on sort au Furco et que Rodrigo est derrière le bar, à coup sûr on lui demande d’en préparer deux. Il a même eu la gentillesse de nous partager les étapes de la préparation de son Old-fashioned.Le Old-fashioned a fait sa place dans plusieurs maisons américaines, mais également dans la prestigieuse Maison-Blanche. En effet, Franklin Delano Roosevelt aimait bien boire ce cocktail en compagnie de sa secrétaire Grace Tully. Contrairement à cette dernière qui le buvait avec du whisky écossais, Roosevelt ne pouvait boire son Old-fashioned qu’avec le vrai spiritueux américain, le bourbon.',
      ingredients: [
        { name: 'Whisky, Bourbon', quantity: 1 },
        { name: 'Cube de sucre de canne', quantity: 1 },
        { name: 'Angostura', quantity: 1 },
      ],
    },
    {
      name: 'Dry Martini',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Martini_KP_06262019_2646-copie.jpg',
      description:
        'Composé simplement de gin et de vermouth sec, le Martini est sans doute le cocktail qui a connu le plus d’évolution au fil du temps. Ses racines sont floues, mais on sait que le Martini est un cousin éloigné de différents cocktails tous inventés entre 1880 et 1905 comme le Martinez, le Marguerite ou encore le Fancy Gin Cocktail. Le classique a évolué à travers les âges pour devenir de plus en plus sec avec l’apparition du London dry gin qui remplaça le gin Old Tom plus sucré. Le vermouth doux est lui aussi mis de côté pour faire place à du vermouth sec et la liqueur d’orange utilisée à la fin du 19e siècle est détrônée par le bitter orange que certains bartenders utilisent toujours.La marque italienne Martini & Rossi a joué un rôle clé dans la popularité du classique notamment à travers des campagnes de publicité dans les journaux arborant le slogan «Ce n’est pas un Martini si vous n’utilisez pas Martini».',
      ingredients: [
        { name: 'Gin', quantity: 1 },
        { name: 'Vermouth sec', quantity: 1 },

      ],
    },
    {
      name: 'Bloody Mary',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Bloody_Mary_1ou2cocktails_cre%CC%81dit.KP_.jpg',
      description:
        'Le Bloody Mary est le cocktail qui offre sans doute le plus de variantes et de réadaptations. Traditionnellement fait à base de jus de tomate et de vodka, il devient un Bloody Ceasar quand on substitue le jus de tomate à du Clamato ou un Bloody Maria quand la Tequila prend la place de la vodka.Comme tout grand classique qui se respecte, l’origine du cocktail est revendiquée par plusieurs barmen, mais la version la plus plausible reste néanmoins qu’il aurait été inventé par Fernand Petiot au Harry’s New York Bar à Paris dans les années 20 en l’honneur d’une belle Américaine nommée Mary. Une autre version assez amusante raconte que la recette avait été inventée pour Ernest Hemingway qui désirait trouver un moyen de camoufler l’odeur de l’alcool dans ses verres, car sa satanée femme Mary “Bloody Mary” lui interdisait de boire.',
      ingredients: [
        { name: 'Vodka', quantity: 1 },
        { name: 'Jus de tomate', quantity: 1 },
        { name: 'Jus de citron', quantity: 1 },
      ],
    },
  ]);

  public selectedCocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails.value[0]
  );

  public selectCocktail(index: number): void {
    this.selectedCocktail.next(this.cocktails.value[index]);
  }

  constructor() {}
}
