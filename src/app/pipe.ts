import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!users || !searchText) {
      return users;
    }

    searchText = searchText.toLowerCase();
    console.log(searchText);
    return users.filter((item) => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
