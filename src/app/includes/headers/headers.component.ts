import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {


  exclusive:boolean = false
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.exclusive.subscribe(res => {
      this.exclusive =res
    })
  }

}
