import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom } from '../../atoms/badge/badge.atom';
import { ProductImageAtom } from '../../atoms/product-image/product-image.atom';

/**
 * Cabecera de tarjeta de producto del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Compone `ProductImageAtom` + título nativo + `BadgeAtom` de descuento
 * para formar la sección superior funcional de una tarjeta.
 *
 * @example
 * ```html
 * <dsb-card-header-molecule
 *   imageUrl="https://picsum.photos/400/300"
 *   title="Audífonos Bluetooth"
 *   discountText="-20%">
 * </dsb-card-header-molecule>
 * ```
 *
 * @selector dsb-card-header-molecule
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-card-header-molecule',
  templateUrl: './card-header.molecule.html',
  imports: [CommonModule, ProductImageAtom, BadgeAtom],
})
export class CardHeaderMolecule {
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
   * Texto alternativo de la imagen.
   *
   * @type {string}
   * @default 'Imagen del producto'
   */
  @Input() imageAlt: string = 'Imagen del producto';

  /**
   * Etiqueta de descuento (por ejemplo `"-20%"`).
   *
   * @description
   * Cuando es cadena vacía no se renderiza el `BadgeAtom`.
   *
   * @type {string}
   * @default ''
   */
  @Input() discountText: string = '';
}
