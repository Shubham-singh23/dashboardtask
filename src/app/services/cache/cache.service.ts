import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  public activeSidebarMenu = 'admin';
  public showBy = 'day';

  constructor() { }
}
