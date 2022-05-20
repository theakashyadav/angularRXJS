import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  datArr = [
    { id: 1, name: 'Akash', gender: 'Male' },
    { id: 2, name: 'Abhishek', gender: 'Male' },
    { id: 3, name: 'Pankaj', gender: 'Male' },
    { id: 4, name: 'Manoj', gender: 'Male' },
    { id: 5, name: 'Prince', gender: 'Male' },
    { id: 6, name: 'Rishi', gender: 'Male' },
    { id: 7, name: 'Zunaid', gender: 'Male' },
    { id: 8, name: 'Saurabh', gender: 'Male' },
    { id: 9, name: 'Gautam', gender: 'Male' },
    { id: 10, name: 'Faizal', gender: 'Male' },
  ]

  data: any;
  data2: any;
  data3: any;
  constructor() { }

  ngOnInit(): void {

    const source = from(this.datArr)
    //EX -01  - Filter by length

    source.pipe(filter(member => member.name.length > 6), toArray()).subscribe(res => {
      console.log(res);
      this.data = res
    })

    //EX -02  - Filter by Gender

    source.pipe(
      filter(member => member.gender == 'Male'), toArray()).subscribe(res => {
        console.log(res);
        this.data2 = res
      })

    //EX -03  - Filter by nth item

    source.pipe(
      filter(member => member.id < 6), toArray()).subscribe(res => {
        console.log(res);
        this.data3 = res
      })


  }

}
