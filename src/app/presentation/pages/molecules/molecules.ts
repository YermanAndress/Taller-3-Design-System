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

/**
 * Página Showcase de moléculas.
 * Muestra ejemplos visuales de las moléculas del sistema de diseño:
 * grupo de botones, navegación y la molécula propia ProductRating
 * implementada en el taller.
 */
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
  /** Ejemplo de datos para el grupo de botones del sistema de diseño base */
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

  /** Ejemplo de enlaces de navegación del sistema de diseño base */
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

  /**
   * Maneja el evento de click de los botones del grupo.
   * @param idButton Identificador del botón presionado
   */
  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }
}