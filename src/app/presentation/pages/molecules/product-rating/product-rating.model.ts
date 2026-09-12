/**
 * Datos de valoración de un producto.
 */
export interface ProductRatingData {
  /** Promedio de calificación (0 a 5) */
  rating: number;
  /** Cantidad total de reseñas */
  reviewsCount: number;
}