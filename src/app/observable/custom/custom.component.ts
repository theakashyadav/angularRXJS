import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus: string = '';
  techStatus2: string = '';
  nameStatus: string = '';
  names: string = '';
  subs2!: Subscription;
  constructor(private _utility: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex -01 (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);
      setTimeout(() => {
        observer.next('TypeScript')
      }, 2000);
      setTimeout(() => {
        observer.next('JavaScript')
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('Html & Css')
      }, 4000);
    })

    cusObs1.subscribe((res: any) => {
      // console.log(res);
      this._utility.liAppend(res, 'elContainer')
    },
      (err: any) => {
        this.techStatus = 'error'
      },
      () => {
        this.techStatus = 'completed'
      })



    //Ex-02 (Custom Interval)

    const Arr2 = ['Angular', 'JavaScript', 'Html', 'Css', 'TypeScript']
    const cusObs2 = Observable.create((observer: any) => {
      let count: number = 0
      setInterval(() => {
        // observer.next('data emit ' + count)
        observer.next(Arr2[count])
        if (count >= 2) {
          observer.error('error')
        }

        if (count >= 5) {
          observer.complete()
        }
        count++
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res: any) => {
      // console.log(res);
      this._utility.liAppend(res, 'elContainer2')
    },
      (err: any) => {
        this.techStatus2 = 'error'
      },
      () => {
        this.techStatus2 = 'completed'
      })


    //Ex -03 (Random Names)
    const Arr3 = ['firstname', 'middlename', 'lastname', 'Akash', 'yadav']

    const cusObs3 = Observable.create((observer: any) => {
      let count: number = 1
      setInterval(() => {
        // observer.next('data emit ' + count)
        observer.next(Arr3[count])
        if (count >= 3) {
          observer.error('error')
        }
        if(count >=4){
          observer.complete()
        }
        count++
      },1000)
    })

    cusObs3.subscribe((res:any) => {
      console.log(res);
      this.names = res
    },
    (err: any) => {
      this.nameStatus = 'error'
    },
    () => {
      this.nameStatus = 'completed'
    })

  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }

}

