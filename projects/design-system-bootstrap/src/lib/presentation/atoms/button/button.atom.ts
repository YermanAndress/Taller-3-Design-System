import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';

/**
 * Botón atómico del Design System.
 *
 * @description
 * Representa un botón reutilizable basado en Bootstrap.
 * Soporta un icono opcional de Bootstrap Icons (`bi-*`) junto al texto.
 * Emite un evento al ser presionado.
 *
 * @example
 * ```html
 * <dsb-button-atom idButton="btn-add-cart" text="Añadir al carrito" type="primary" icon="cart-fill">
 * </dsb-button-atom>
 * ```
 */
@Component({
  selector: 'dsb-button-atom',
  template: `
    <button 
      [id]="idButton"
      type="button" 
      class="btn d-inline-flex align-items-center gap-2"
      [class]="getClass()"
      (click)="onEmit()">
      @if (icon) {
        <i class="bi" [class]="'bi-' + icon" aria-hidden="true"></i>
      }
      {{ text }}
    </button>`,
})
export class ButtonAtom {
  /** Texto visible del botón */
  @Input() text: string = '';

  /** Identificador único del botón */
  @Input() idButton: string = '';

  /** Tipo visual del botón */
  @Input() type: ButtonType = 'primary';

  /**
   * Nombre del icono de Bootstrap Icons a mostrar junto al texto.
   *
   * @description
   * Corresponde al sufijo del icono sin el prefijo `bi-`
   * (por ejemplo `"cart-fill"` renderiza `bi bi-cart-fill`).
   * Cuando es cadena vacía no se renderiza ningún icono,
   * manteniendo compatibilidad con usos solo de texto.
   *
   * @type {string}
   * @default ''
   *
   * @example
   * ```html
   * <dsb-button-atom icon="cart-fill" text="Añadir al carrito">
   * </dsb-button-atom>
   * ```
   */
  @Input() icon: string = '';

  /**
   * Evento emitido al hacer click en el botón.
   *
   * @emits string Identificador del botón
   */
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Retorna la clase CSS correspondiente al tipo del botón.
   *
   * @returns {string} Clase Bootstrap del botón
   */
  getClass(): string {
    return `btn-${this.type}`;
  }

  /**
   * Emite el evento `clicker` con el identificador del botón.
   *
   * @returns {void}
   */
  onEmit(): void {
    this.clicker.emit(this.idButton);
  }
}