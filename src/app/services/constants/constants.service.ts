import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public sidebarMenu = [
    {
      name:'Admin',
      id:'admin'
    },{
      name:'Reception',
      id:'reception'
    },{
      name:'Surgery',
      id:'surgery'
    },{
      name:'Andrology',
      id:'andrology'
    },{
      name:'Embriology',
      id:'embriology'
    },{
      name:'Configrations',
      id:'configrations'
    }
  ];
}
