import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value > 0){
      return `<span class="text-success">+${value}</span>`;
    }else if(value < 0){
      return `<span class="text-danger">${value}</span>`;
    }else{
      return value.toString();
    }
  }

}
