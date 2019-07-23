import { Injectable } from '@angular/core';
import { Spec } from './spec';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})


export class NotificationService {

  constructor() { }

  getData(): Spec[] {
    return Data
}

}