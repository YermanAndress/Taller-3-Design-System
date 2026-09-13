import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
} from '@brejcha13320/design-system-bootstrap';
import { Badge } from './badge/badge';
import { BadgeConfig } from './badge/badge.model';

/**
 * Página Showcase de átomos.
 * Muestra ejemplos visuales de todos los átomos del sistema de diseño:
 * iconos, badges, botones y el badge propio (custom) implementado en el taller.
 */
@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    CommonModule,
    Badge,
  ],
})
export class Atoms {
  /** Ejemplos de badges predefinidos del sistema de diseño base */
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  /** Ejemplos de botones predefinidos del sistema de diseño base */
  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  /** Ejemplos de iconos predefinidos del sistema de diseño base */
  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  /** Ejemplos del atomo Badge propio para el showcase */
  customBadges: BadgeConfig[] = [
    { text: '-20%', variant: 'discount' },
    { text: '4.5', variant: 'rating' },
    { text: 'Disponible', variant: 'stock' },
  ];

  /**
   * Maneja el evento de click de los botones de ejemplo.
   * @param idButton Identificador del botón presionado
   */
  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

}