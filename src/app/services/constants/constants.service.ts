import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public sidebarMenu = [
    {
      displayName:'Admin',
      id:'admin'
    },{
      displayName:'Reception',
      id:'reception'
    },{
      displayName:'Surgery',
      id:'surgery'
    },{
      displayName:'Andrology',
      id:'andrology'
    },{
      displayName:'Embriology',
      id:'embriology'
    },{
      displayName:'Configrations',
      id:'configrations'
    }
  ];

  public showBy = [
    {
      displayName:'Day',
      id:'day'
    },
    {
      displayName:'Month',
      id:'month'
    },
    {
      displayName:'Year',
      id:'year'
    }
  ]
}
