import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    let dob : Date = new Date(value);
    let currentDate : Date = new Date();
    let age : number  = currentDate.getFullYear() - dob.getFullYear();
    currentDate.setFullYear(currentDate.getFullYear()-age);
    return (currentDate >= dob)?age:--age;
  }

}
