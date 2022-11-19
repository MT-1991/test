import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status } from '../../utilities/item-interface'
import { Person } from '../../utilities/person'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  information = {
    fileObject : new FormData(),
      count: 0,
      date: '',
      source: '',
      status: {} as Status,
      person: {} as Person
  };

  status: Status[] = [
    { name: 'Active', code: 'active' },
    { name: 'Done', code: 'done' }
  ];

  persons : Person[] = [
    { name: 'Mohsen', family: 'Telgerdy', usercode: 0 },
    { name: 'Amin', family: 'Telgerdy', usercode: 1 },
  ];

  private informationComplete = new Subject<any>();

  informationComplete$ = this.informationComplete.asObservable();

  getTicketInformation() {
    return this.information;
  }

  setTicketInformation(information: { fileObject : any , count: number; date: string; source: string; status: Status; person : Person  }) {
    this.information = information;
  }

  complete() {
    this.informationComplete.next(this.information);
  }
}
