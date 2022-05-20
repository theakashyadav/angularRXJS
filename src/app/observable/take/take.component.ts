import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, tap, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private _design: DesignUtilityService) { }

  randomNames = ['A', 'Q', 'E', 'R', 'T', 'Y', 'G', 'H', 'V', 'N', 'B']

  ngOnInit(): void {
    // const source = interval(1000).pipe(take(5));
    //Ex-01 | Take
    const nameSource = from(this.randomNames)
    nameSource.pipe(take(5)).subscribe(res => {
      // console.log(res,"res res res");
      this._design.liAppend(res, 'elContainer')
    })


    //Ex-02 | TakeLast
    const nameSource2 = from(this.randomNames)
    nameSource2.pipe(takeLast(5)).subscribe(res => {
      //  console.log(res,"res res res");
      this._design.liAppend(res, 'elContainer2')
    })


    //Ex-03 | TakeUntil 
    // const nameSource3 = from(this.randomNames)
    // nameSource2.pipe(takeLast(5)).subscribe(res => {
    //   console.log(res,"res res res");
    //   this._design.liAppend(res,'elContainer2')
    // })
    let condition = timer(5000)
    let condition2 = fromEvent(document, 'click')
    const source = interval(1000)
    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    )
      .subscribe((res: any) => {
        console.log(res);
        this._design.liAppend(res, 'elContainer3')
      })
  }

}
