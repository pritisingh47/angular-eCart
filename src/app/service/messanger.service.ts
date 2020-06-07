import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  constructor() { }

  subject = new Subject();

  sendMsg(product: Products) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
