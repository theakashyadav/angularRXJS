import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Akash');
  constructor() { }

  liAppend(counter: string,containerId:string){
    let el = document.createElement('li');
    el.innerHTML = counter;
    document.getElementById(containerId)?.appendChild(el)
  }
}
