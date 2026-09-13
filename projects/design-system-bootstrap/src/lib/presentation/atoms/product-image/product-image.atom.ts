import { Component, Input } from '@angular/core';

/**
 * Imagen de producto del Design System.
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Renderiza la imagen principal de un producto con estilos Bootstrap
 * (`img-fluid`) y es la base visual de `CardHeaderMolecule`.
 *
 * @example
 * ```html
 * <dsb-product-image-atom src="https://picsum.photos/400/300" alt="Audífonos Bluetooth">
 * </dsb-product-image-atom>
 * ```
 *
 * @selector dsb-product-image-atom
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-product-image-atom',
  template: `<img class="img-fluid rounded product-image" [src]="src" [alt]="alt" loading="lazy" />`,
})
export class ProductImageAtom {
  /**
   * URL de la imagen del producto.
   *
   * @type {string}
   * @default ''
   *
   * @required
   */
  @Input({ required: true }) src: string = '';

  /**
   * Texto alternativo de la imagen.
   *
   * @description
   * Mejora la accesibilidad cuando la imagen no carga
   * o es leída por lector de pantalla.
   *
   * @type {string}
   * @default 'Imagen del producto'
   */
  @Input() alt: string = 'Imagen del producto';
}
