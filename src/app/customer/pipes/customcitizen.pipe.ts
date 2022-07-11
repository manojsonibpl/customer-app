import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'customcitizen'
})
export class CustomcitizenPipe implements PipeTransform {

  transform(age: number): string {

    if(age>60){
      return "Senior Citizen";
    }
    else{
      return "-";
    }
  }
}
