import { Component } from '@angular/core';
import { Listado } from './listado';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ejercicio-Angular';
  desplegar = true;

  listado:Listado[] = [
    { nombre: "Leche", costo: "250" },
    { nombre: "Huevos", costo: "500" },
    { nombre: "Jabon", costo: "200" },
    { nombre: "Gaseosa", costo: "550" },
    { nombre: "Cafe", costo: "100" },
    { nombre: "Carbon", costo: "800" },
    { nombre: "Chicle", costo: "400" },
    { nombre: "Galletas", costo: "250" },
  ];

  mostrarListado() {
    this.desplegar = !this.desplegar;
  }

}
