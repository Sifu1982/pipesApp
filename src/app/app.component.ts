import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Inyecto el servicio de PrimeNG
  constructor(private primengConfig: PrimeNGConfig) {}

  // Inicio el efecto de burbuja del Fieldset
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
