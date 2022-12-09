import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'firstCapital'
})
export class FirstCapital implements PipeTransform{
    transform(value: string):string {
      if (!value)
        return 'Undefined';
        return value.substring(0,1).toUpperCase()+value.substring(1).toLocaleLowerCase();
    }
}
