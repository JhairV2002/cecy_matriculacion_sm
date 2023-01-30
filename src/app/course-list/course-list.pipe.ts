import { Pipe, PipeTransform } from '@angular/core';
import { Carreras, Curso } from '../interfaces/carreers';

@Pipe({
  name: 'courseList'
})
export class CourseListPipe implements PipeTransform {

  transform(items: Curso[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.nombre.toLocaleLowerCase().includes(searchText);
    });
  }

}
