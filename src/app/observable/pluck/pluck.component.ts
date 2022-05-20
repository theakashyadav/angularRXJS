import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }
  
  users = [
    {
      name: 'Akash',
      skills: 'Angular',
      job: {
        title: 'Angular Developer',
        exp : '10 yrs'
      }
    },
    {
      name: 'Abhishek',   
      skills: 'Html & css',
      job: {
        title: 'UI Developer',
        exp : '1 yrs'
      }
    },
    {
      name: 'Manoj',
      skills: 'TypeScript',
      job: {
        title: 'TypeScript Developer',
        exp : '15 yrs'
      }
    },
  ]
  data!: string[];
  data2!: string[];
  ngOnInit(): void {

    //Ex- 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
      ).subscribe(res => {
      console.log(res);
      this.data = res
    })

    //Ex- 02
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job','title'),
      toArray()
      ).subscribe((res:any) => {
      console.log(res);
      this.data2 = res
  })
}
  
}
