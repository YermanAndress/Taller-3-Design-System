import { Component } from '@angular/core';
import { ContainerAtom, NavbarConfig, NavbarOrganism, ProductCardData, ProductCardOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Página Showcase de organismos.
 * Muestra ejemplos visuales de los organismos del sistema de diseño,
 * como la barra de navegación (Navbar) y la tarjeta de producto.
 */
@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ContainerAtom, ProductCardOrganism],
})
export class Organisms {
  /** Configuración de ejemplo para el organismo Navbar */
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  }

  /** Ejemplos de tarjetas de producto de la librería para evidenciar reutilización del organismo */
  productCards: ProductCardData[] = [
    { imageUrl: 'https://picsum.photos/400/300', title: 'Audífonos Bluetooth', discountText: '-20%', rating: 4.5, reviewsCount: 120, price: 49.99 },
    { imageUrl: 'https://picsum.photos/400/301', title: 'Mochila de viaje', discountText: '', rating: 3.2, reviewsCount: 50, price: 89.9 },
    { imageUrl: 'https://picsum.photos/400/302', title: 'Lámpara de escritorio', discountText: '-10%', rating: 5, reviewsCount: 8, price: 29.99 },
    { imageUrl: 'https://picsum.photos/400/303', title: 'Teclado mecánico', discountText: '', rating: 2.3, reviewsCount: 15, price: 79.5 },
  ];

  /**
   * Maneja el añadido al carrito desde la tarjeta.
   * @param idButton Identificador del botón presionado
   */
  onAddToCart(idButton: string){
    alert(`Añadido al carrito desde ${idButton}`);
  }
}
