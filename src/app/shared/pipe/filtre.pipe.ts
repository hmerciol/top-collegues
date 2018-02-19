import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: Collegue[], arg: string): Collegue[] {
    if(arg == ""){
      return value;
    }else{
      return value.filter(col => col.pseudo.toUpperCase().startsWith(arg.toUpperCase()));
    }
  }

}
