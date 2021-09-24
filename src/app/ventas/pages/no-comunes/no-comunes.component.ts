import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'David';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente(): void {
    if (this.nombre === 'David') {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    } else {
      this.nombre = 'David';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'David',
    edad: '39',
    direccion: 'Beniaján, Murcia',
  };

  // json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //async Pipe
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa!!!');
    }, 4000);
  });

  miObservable = interval(1000); // 0,1,2,3,4,5,6...
}
