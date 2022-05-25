import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
})
export class CategoriaPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'PF':
        return 'home_filled';
      case 'PJ':
        return 'domain';
    }
    return 'work_off';
  }
}
