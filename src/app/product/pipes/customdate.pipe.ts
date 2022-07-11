import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe extends 
DatePipe implements PipeTransform {

  transform(expirydate: Date): string {
    return super.transform(expirydate, "M/d/yyyy");
  }

}
