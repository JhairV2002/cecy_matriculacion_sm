import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../interfaces/carreers';

@Pipe({
  name: 'courseListCheckboxNonfree'
})
export class CourseListCheckboxNonfreePipe implements PipeTransform {

  transform(items: Curso[], checked: boolean): any[] {

    if (!items) {
      return [];
    }
    if (checked === false) {
      return items;
    }

    return items.filter(it => {
      return it.gratis === !checked;
    });
  }

}
