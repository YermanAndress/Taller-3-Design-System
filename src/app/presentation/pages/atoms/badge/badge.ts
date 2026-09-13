import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeConfig } from './badge.model';

/**
 * Átomo Badge.
 * Muestra una etiqueta corta con estilo según su variante.
 */
@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  /** Configuración del badge (texto y variante) */
  @Input({ required: true }) config!: BadgeConfig;
}