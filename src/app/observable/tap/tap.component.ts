import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  mycolor!:string;
  constructor(private _utility: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex -01 
    const Arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const source = interval(1000)
    let obsSubscription: Subscription

    obsSubscription = source.pipe(tap(res => {
      if (res >= Arr.length) {
        obsSubscription.unsubscribe()
      }
    }),
      map(res => Arr[res])
    ).subscribe(res => {
      console.log(res);
      this._utility.liAppend(res, 'elContainer')
    })



    //Ex -02 
    const Arrr = ['red', 'yellow', 'pink', 'blue', 'green', 'purple', 'orange']

    let obsSubscription2: Subscription

    obsSubscription2 = source.pipe(tap(res => {
      console.log('Tap', res);
      this.mycolor = Arrr[res]
      if (res >= Arrr.length) {
        obsSubscription2.unsubscribe()
      }
    }),
      map(res => Arrr[res])
    ).subscribe(res => {
      console.log(res);
      this._utility.liAppend(res, 'elContainer2')
    })
  }

}
