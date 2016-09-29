import { Injectable } from '@angular/core';

import { Contact } from './contact.model';

@Injectable()
export class ContactFilterService {
  constructor() {}

  filter(data: string, props: Array<string>, originalList: Contact[]) {
    let filteredList: Contact[];
    if (data && props && originalList) {
      data = data.toLowerCase();
      let filtered = originalList.filter(item => {
        let match = false;
        for (let prop of props) {
          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            match = true;
            break;
          }
        };
        return match;
      });
      filteredList = filtered;
    } else {
      filteredList = originalList;
    }
    return filteredList;
  }
}
