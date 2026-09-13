/**
 * Configuración visual del componente Badge.
 */
export interface BadgeConfig {
  /** Texto que se muestra dentro del badge */
  text: string;
  /** Variante visual del badge */
  variant: 'discount' | 'rating' | 'stock';
}