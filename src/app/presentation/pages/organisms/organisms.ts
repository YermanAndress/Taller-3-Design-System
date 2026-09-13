import { Component } from '@angular/core';
import { ContainerAtom, NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Página Showcase de organismos.
 * Muestra ejemplos visuales de los organismos del sistema de diseño,
 * como la barra de navegación (Navbar).
 */
@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ContainerAtom],
})
export class Organisms {
  /** Configuración de ejemplo para el organismo Navbar */
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  }
}
