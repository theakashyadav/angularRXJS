import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //subsciptions
  sub1!: Subscription
  sub2!: Subscription

  //messages
  msg1!: string;
  msg2!: string | number;
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {



    const broadCastVideos = interval(1000)

    //Ex -01
    this.sub1 = broadCastVideos.pipe(
      map(mapdata => 'Video ' + mapdata
      )
    ).subscribe(res => {
      // console.log(res);
      this.msg1 = res
    })

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);

    //Ex -02
    this.sub2 = broadCastVideos.pipe(
      map(data => data*2)
    ).subscribe(res => {
      // console.log(res);
      this.msg2 =res
    })

    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000);



    //Ex -03
    const members = from([
      { id:1 ,name: 'Akash'},
      { id:2 ,name: 'Abhishek'},
      { id:3 ,name: 'Saurabh'},
      { id:4 ,name: 'Gautam'},
      { id:5 ,name: 'Pankaj'},
      { id:6 ,name: 'Manoj'},
      { id:7 ,name: 'Faizal'},
    ])

    members.pipe(
      map(data => data.name)
    ).subscribe(res =>{
      console.log(res);
      this._du.liAppend(res,'elContainer')
    })


  }

}
