import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  users =[
    {name:'Akash',skills: 'Angular'},
    {name:'Shirish',skills:'HTMl'},
    {name:'Rohit',skills:'React'}
  ]

  constructor() { }
  
  sourceSub!: Subscription 
  ngOnInit(): void {

    //Ex-01
    const source = interval(100);
    this.sourceSub = source.pipe(take(10),toArray()).subscribe(res => {
      console.log(res);
    })

    //Ex-02
    const source2 = from(this.users)
    source2.pipe(toArray()).subscribe(res =>{
      console.log(res);
    })

    //Ex-03
    const source3 = of( 'the','Akash','yadav')
    source3.pipe(toArray()).subscribe(res =>{
      console.log(res);
      
    })
  }

}
