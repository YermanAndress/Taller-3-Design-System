import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonAtom } from '../../atoms/button/button.atom';
import { PriceAtom } from '../../atoms/price/price.atom';
import { CardHeaderMolecule } from '../../molecules/card-header/card-header.molecule';
import { RatingMolecule } from '../../molecules/rating/rating.molecule';

/**
 * Tarjeta de producto del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Compone `CardHeaderMolecule` + `RatingMolecule` + `PriceAtom` + `ButtonAtom`
 * (botón carrito con icono) en una sección funcional de tarjeta.
 * El precio se pinta dentro del organismo con `PriceAtom`.
 *
 * @example
 * ```html
 * <dsb-product-card-organism
 *   imageUrl="https://picsum.photos/400/300"
 *   title="Audífonos Bluetooth"
 *   discountText="-20%"
 *   [rating]="4.5"
 *   [reviewsCount]="120"
 *   [price]="49.99"
 *   (addToCart)="onAdd($event)">
 * </dsb-product-card-organism>
 * ```
 *
 * @selector dsb-product-card-organism
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-product-card-organism',
  templateUrl: './product-card.organism.html',
  imports: [CommonModule, CardHeaderMolecule, RatingMolecule, PriceAtom, ButtonAtom],
})
export class ProductCardOrganism {
  /**
   * URL de la imagen del producto.
   *
   * @type {string}
   * @default ''
   */
  @Input() imageUrl: string = '';

  /**
   * Título del producto.
   *
   * @type {string}
   * @default ''
   */
  @Input() title: string = '';

  /**
   * Etiqueta de descuento.
   *
   * @type {string}
   * @default ''
   */
  @Input() discountText: string = '';

  /**
   * Promedio de calificación de 0 a 5.
   *
   * @type {number}
   * @default 0
   */
  @Input() rating: number = 0;

  /**
   * Cantidad total de reseñas.
   *
   * @type {number}
   * @default 0
   */
  @Input() reviewsCount: number = 0;

  /**
   * Precio del producto.
   *
   * @type {number}
   * @default 0
   */
  @Input() price: number = 0;

  /**
   * Código de moneda ISO 4217.
   *
   * @type {string}
   * @default 'USD'
   */
  @Input() currency: string = 'USD';

  /**
   * Identificador del botón de carrito.
   *
   * @type {string}
   * @default 'btn-add-cart'
   */
  @Input() buttonId: string = 'btn-add-cart';

  /**
   * Texto del botón de carrito.
   *
   * @type {string}
   * @default 'Añadir al carrito'
   */
  @Input() buttonText: string = 'Añadir al carrito';

  /**
   * Evento emitido al añadir el producto al carrito.
   *
   * @emits string Identificador del botón presionado.
   */
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Reemite el click del botón carrito hacia el padre.
   *
   * @param {string} idButton Identificador del botón presionado.
   * @returns {void}
   */
  onAddToCart(idButton: string): void {
    this.addToCart.emit(idButton);
  }
}
