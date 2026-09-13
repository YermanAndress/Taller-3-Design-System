import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente raíz de la aplicación.
 * Renderiza la barra de navegación principal (Navbar) y el
 * contenido de las rutas hijas mediante RouterOutlet.
 */
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarOrganism,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Configuración de la barra de navegación principal */
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