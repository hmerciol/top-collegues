import { Pipe, PipeTransform } from '@angular/core';
import { Vote } from '../domain/avis';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(value: Vote, args?: any): string {
    return `${value.collegue.pseudo} est ${this.getAvis(value.avis)}, son score est désormais de ${value.score} ${this.getSmile(value.avis)}`;
  }

  private getAvis(avis):string {
    if(avis == "aimer"){
      return "aimé(e)";
    }else{
      return "détesté(e)";
    }
  }

  private getSmile(avis):string {
    if(avis == "aimer"){
      return "\\o/";
    }else{
      return ":-(";
    }
  }

}
