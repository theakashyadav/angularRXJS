import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit ,AfterViewInit{

  constructor(private _utility:DesignUtilityService) { }

  @ViewChild('addBtn') addBtn!:ElementRef

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count:number = 1
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res =>{
      let stringValue = 'Video ' + count + ' Created'
      let counterValue =  'Video' + count++
      this._utility.liAppend(stringValue ,'elContainer');
      this._utility.liAppend(counterValue ,'elContainer2');
    })
  }

 
}

