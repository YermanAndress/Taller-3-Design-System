import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Precio de producto del Design System.
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Muestra un valor monetario con formato de moneda
 * y es usado por `ProductCardOrganism`.
 *
 * @example
 * ```html
 * <dsb-price-atom [value]="49.99" currency="USD"></dsb-price-atom>
 * ```
 *
 * @selector dsb-price-atom
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-price-atom',
  template: `<span class="fw-bold price">{{ value | currency:currency }}</span>`,
  imports: [CommonModule],
})
export class PriceAtom {
  /**
   * Valor numérico del precio.
   *
   * @type {number}
   * @default 0
   *
   * @required
   */
  @Input({ required: true }) value: number = 0;

  /**
   * Código de moneda ISO 4217.
   *
   * @description
   * Se pasa directo al pipe `currency` de Angular.
   *
   * @type {string}
   * @default 'USD'
   *
   * @example
   * ```ts
   * currency = 'COP';
   * ```
   */
  @Input() currency: string = 'USD';
}
