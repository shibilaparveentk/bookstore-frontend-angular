import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allBooks: [], searchKey: string, propName: string): any[] {
    const result: any = []
    if (!allBooks || searchKey == '' || propName == '') {
      return allBooks
    }
    allBooks.forEach((book: any) => {
      if (book[propName].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(book)
      }
    })
    return result;
  }
}
