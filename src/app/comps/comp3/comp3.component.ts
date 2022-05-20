import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

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
