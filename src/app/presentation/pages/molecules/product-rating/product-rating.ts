import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from '../../atoms/badge/badge';
import { BadgeConfig } from '../../atoms/badge/badge.model';
import { ProductRatingData } from './product-rating.model';

/**
 * Molécula ProductRating.
 * Muestra la valoración de un producto con estrellas,
 * número de reseñas y un badge con el promedio.
 */
@Component({
  selector: 'app-product-rating',
  imports: [CommonModule, Badge],
  templateUrl: './product-rating.html',
  styleUrl: './product-rating.scss',
})
export class ProductRating {
  /** Datos de valoración del producto */
  @Input({ required: true }) data!: ProductRatingData;

  /** Arreglo fijo usado para pintar las 5 estrellas */
  readonly stars = [1, 2, 3, 4, 5];

  /** Devuelve la configuración del badge con el promedio */
  get ratingBadgeConfig(): BadgeConfig {
    return { text: this.data.rating.toFixed(1), variant: 'rating' };
  }

  /** Indica si una estrella debe pintarse como llena */
  isFilled(star: number): boolean {
    return star <= Math.round(this.data.rating);
  }
}
