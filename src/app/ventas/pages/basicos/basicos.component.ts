import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'david';
  nombreUpper: string = 'DAVID';
  nombreCompleto: string = 'dAvId mArtÍnEz';

  fecha: Date = new Date(); // El día de hoy
}
