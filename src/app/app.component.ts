import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Fernando';
  nombre2 = 'juAn pablo viLLegas gomez';
  arreglo = [1, 2, 3 , 4 , 5 , 6, 7, 8 , 9 , 10];

  PI = Math.PI;

  a  = 0.234;

  salario = 1234.5;

  activar = true;


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  }

  URLVideo = "3R1ysTlxiVY";

  valorDePromesa = new Promise( (resolve, reject ) => {

    setTimeout( ()=> resolve("Llego la data"), 6500);
  })

  fecha = new Date();


  password = "godzilla";

  


}
