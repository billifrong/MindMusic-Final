import { Pipe, PipeTransform } from '@angular/core';
import { post } from 'jquery';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const resultCancion=[];
    for(const cancion of value){
      if(cancion.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCancion.push(cancion);
      }
    }
    return resultCancion
  }
}
