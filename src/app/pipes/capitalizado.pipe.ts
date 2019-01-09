import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true /*Por defecto es true, lo quiero todo capitalizado*/ ): string {

      value = value.toLowerCase();
      let nombres = value.split(" ");

      if(todas) {
        for( let i in nombres){
          //Si lo quiero todo capitalizado.
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }

      }
      else{
        //Obtengo el primer nombre y lo paso en mayuscula la primera letra.
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      }

      //Los une todos.
      return nombres.join(" ");
  }
}
