import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private el: ElementRef) {
  }
  scrollToInicio() {
    const inicioElements = document.getElementsByClassName('inicio');

    if (inicioElements.length > 0) {
      const primerElementoInicio = inicioElements[0];
      primerElementoInicio.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToEventos() {
    const inicioElements = document.getElementsByClassName('eventos');

    if (inicioElements.length > 0) {
      const primerElementoInicio = inicioElements[0];
      primerElementoInicio.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToRepositorios() {
    const inicioElements = document.getElementsByClassName('repositorios');

    if (inicioElements.length > 0) {
      const primerElementoInicio = inicioElements[0];
      primerElementoInicio.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
