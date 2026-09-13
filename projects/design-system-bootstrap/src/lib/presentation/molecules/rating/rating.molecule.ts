import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom } from '../../atoms/badge/badge.atom';

/**
 * Molécula de valoración de producto del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Muestra estrellas Bootstrap Icons (`bi-star-fill` / `bi-star`),
 * un `BadgeAtom` con el promedio y el conteo de reseñas.
 * Es solo visualización (dumb), no emite eventos.
 *
 * @example
 * ```html
 * <dsb-rating-molecule [rating]="4.5" [reviewsCount]="120"></dsb-rating-molecule>
 * ```
 *
 * @selector dsb-rating-molecule
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-rating-molecule',
  templateUrl: './rating.molecule.html',
  imports: [CommonModule, BadgeAtom],
})
export class RatingMolecule {
  /**
   * Promedio de calificación de 0 a 5.
   *
   * @description
   * Se muestra con un decimal en el badge y se redondea
   * al entero más cercano solo para pintar estrellas.
   * Se limita al rango `0..maxStars`.
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
   * Número máximo de estrellas a renderizar.
   *
   * @type {number}
   * @default 5
   */
  @Input() maxStars: number = 5;

  /**
   * Tamaño de las estrellas en `rem`.
   *
   * @type {number}
   * @default 1
   */
  @Input() size: number = 1;

  /**
   * Arreglo base para pintar estrellas en el template.
   *
   * @returns Arreglo de posiciones `[1,2,3,4,5]`.
   */
  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  /**
   * Máximo de estrellas normalizado como entero no negativo.
   *
   * @returns Número entero mayor o igual a `0`.
   */
  getNormalizedMaxStars(): number {
    if (!Number.isFinite(this.maxStars)) {
      return 5;
    }
    return Math.max(0, Math.floor(this.maxStars));
  }

  /**
   * Valoración redondeada y limitada al rango válido.
   *
   * @returns Valor entero entre `0` y el máximo normalizado.
   */
  getRoundedRating(): number {
    const max = this.getNormalizedMaxStars();
    return Math.round(Math.min(Math.max(this.rating, 0), max));
  }

  /**
   * Texto del badge con el promedio en un decimal.
   *
   * @returns Promedio formateado, por ejemplo `"4.5"`.
   */
  get ratingBadgeText(): string {
    if (!Number.isFinite(this.rating)) {
      return '0.0';
    }
    return this.rating.toFixed(1);
  }

  /**
   * Indica si una estrella debe pintarse como llena.
   *
   * @param {number} star Posición de la estrella (base 1).
   * @returns {boolean} `true` si es rellena, `false` si es vacía.
   */
  isFilled(star: number): boolean {
    return star <= this.getRoundedRating();
  }

  /**
   * Clase Bootstrap Icon según el estado de la estrella.
   *
   * @param {boolean} filled Indica si la estrella es rellena.
   * @returns {string} `bi-star-fill` o `bi-star`.
   */
  getStarClass(filled: boolean): string {
    return filled ? 'bi-star-fill' : 'bi-star';
  }
}
