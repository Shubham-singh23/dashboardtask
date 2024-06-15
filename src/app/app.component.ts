import { Component } from '@angular/core';
import { ConstantsService } from './services/constants/constants.service';
import { CacheService } from './services/cache/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public constant : ConstantsService,
    public cache : CacheService
  ){}
}
