import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _utility:DesignUtilityService) { }

  obsMsg!:any; 

  ngOnInit(): void {

    const Obs1 =of('firstname', 'middlename', 'lastname')
    Obs1.subscribe(res =>{
      console.log(res);
      this._utility.liAppend(res,'elContainer')
    })

    const Obs2 =of({'firstname' : 'Akash', 'middlename': '', 'lastname': 'Yadav'})
    Obs2.subscribe((res:any) =>{
      this.obsMsg = res
      console.log(this.obsMsg);
    })


    //from:Array
    let arr = ['A', 'K','A','S','H']
    const Obs3 =from(arr)
    Obs3.subscribe(res =>{
      console.log(res);
      this._utility.liAppend(res,'elContainer1')
    })

    //from:Promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('Promise Resolved')
      },3000)
    })
    const Obs4 =from(promise)
    Obs4.subscribe((res:any) =>{
      console.log(res);
      this._utility.liAppend(res,'elContainer2')
    })

    //from:stringValue
    const Obs5 =from('Welcome to Lucknow')
    Obs5.subscribe((res:any) =>{
      console.log(res);
      this._utility.liAppend(res,'elContainer3')
    })
  }

}
