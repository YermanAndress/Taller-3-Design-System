import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  ContainerAtom, 
  NavLink, 
  NavLinkMolecule 
} from '@brejcha13320/design-system-bootstrap';
import { ProductRating } from './product-rating/product-rating';
import { ProductRatingData } from './product-rating/product-rating.model';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    ProductRating,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  /** Ejemplos de la molecula ProductRating para el showcase */
  productRatings: ProductRatingData[] = [
    { rating: 4.5, reviewsCount: 120 },
    { rating: 3.2, reviewsCount: 50 },
    { rating: 5, reviewsCount: 8 },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }
}