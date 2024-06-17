import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public pendingPatients = [
    {
      name:'Mr. Rohan Jadhav',
      id:'BFI/00000002/20024',
      age:39,
      gender:'Male',
      mobNumber:'+91 8765416544',
      reasonOfVisit:'Advance Semen Analysis',
      date:'01-Feb-2024',
      time:'15:24'
    },
    {
      name:'Mrs. Divya More',
      id:'BFI/00000002/20024',
      age:31,
      gender:'female',
      mobNumber:'+91 8765416544',
      reasonOfVisit:'Oocyte Retrieval',
      date:'01-Feb-2024',
      time:'15:24'
    }
  ]
}
