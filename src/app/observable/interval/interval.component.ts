import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor(private _utility:DesignUtilityService) { }

  obsMsg!:string;
  videoSubscription!: Subscription;

  ngOnInit(): void {

    const broadcastVideos = interval(1000);
    //timer(delay(),interval());
    const broadcastVideo = timer(5000, 1000)
    this.videoSubscription= broadcastVideo.subscribe(res => {
      // console.log(res);
      this.obsMsg = 'Video' + res
      this._utility.liAppend(this.obsMsg,'elContainer')
      this._utility.liAppend(this.obsMsg,'elContainer1')
      this._utility.liAppend(this.obsMsg,'elContainer2')
      if (res>=5) {
        this.videoSubscription.unsubscribe();
      }
    })

  }

}
