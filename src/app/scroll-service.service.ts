import { EventEmitter, Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  scrollEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}

