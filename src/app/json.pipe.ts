import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint',
})
export class PrettyPrintPipe implements PipeTransform {
  transform(val: string) {
    return JSON.stringify(val, null, 2)
      .replace(/ /g, '&nbsp;') // note the usage of `/ /g` instead of `' '` in order to replace all occurences
      .replace(/\n/g, '<br/>');
  }
}
