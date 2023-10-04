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
    const inicioElement = document.getElementById('inicio');
    if (inicioElement) {
      inicioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToEventos() {
    const inicioElement = document.getElementById('eventos');
    if (inicioElement) {
      inicioElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  scrollToRepositorios() {
    const inicioElement = document.getElementById('repositorios');
    if (inicioElement) {
      inicioElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
