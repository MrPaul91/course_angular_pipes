import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = true): any {
    

    if(ocultar){

      let size = value.length;
      let salida = '';

      for(let i = 0; i < size; i++){
        salida = salida + '*';
      }

      return salida;
    }
    else{
       
      return value;
      

    }
  }

}
