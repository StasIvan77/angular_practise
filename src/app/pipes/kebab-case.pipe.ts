import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
  pure: true
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string): string {
    const words: string[] = value.split(' ');
    return words.join('-');
  }

}
