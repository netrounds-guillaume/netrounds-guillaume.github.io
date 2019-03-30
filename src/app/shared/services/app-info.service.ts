import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  public get title() {
    return 'Dashboard Ncc3';
  }
}
