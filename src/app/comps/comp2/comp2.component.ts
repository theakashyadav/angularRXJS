import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName!:string;
  constructor(private _du:DesignUtilityService) {
    this._du.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit(): void {
  }

  onChange(value:any){
    console.log(value.value);
    this._du.userName.next(value.value)
  }

}
