import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
// import { rejects } from 'assert';
// import { resolve } from 'dns';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal: string = ''
  message: any = 'Data'
  message2: any = 'Data'
  message3: any = 'Data'
  
  constructor() { }

  // asusAvailable() {
  //     return true
  // }

  // hpAvailable() {
  //     return false
  // }

  asus = {
    brand: 'Dell',
    color: 'Silver'
  }
  hp = {
    brand: 'HP',
    color: 'Black'
  }

  ngOnInit(): void {

    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('Promise is resolved')
    // });

    // let buyLaptop = new Promise((resolve, reject) => {
    //   if (this.asusAvailable()) {
    //     return setTimeout(() => {
    //       resolve(this.asus)
    //     }, 3000);

    //   }else if (this.hpAvailable()) {
    //       return setTimeout(() => {
    //         resolve('Hp is available')
    //       }, 3000);
    //   }else{
    //     return setTimeout(() => {
    //       reject('Noth9ng available')
    //     }, 3000);
    //   }

    // });

    // buyLaptop.then((res:any) => {
    //   console.log('Success', res);
    //   this.promiseVal = res
    // }).catch(res => {
    //   console.log('reject', res);
    //   this.promiseVal = res
    // })

    // console.log(this.getdata());
    // this.getdata().then((data:any) => console.log(data));
    // this.getdata();




  }
  // promise = new Promise((resolve,reject) => {
  //   setTimeout(() => {
  //       resolve('Data received')
  //   }, 3000);
  // })

  // async getdata(){
  //     let response = await this.promise
  //     console.log(response);
  // }


  buyLaptop = new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(this.asus)
    }, 3000);
  })

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
  ////EXAMPLE --1
 
  fetch1() {
    this.message = 'fetching data...'
    this.buyLaptop.then((res:any) =>{
      console.log(res);
      this.message = res.brand
    })
  }

  ////EXAMPLE --2
  async fetch2(){
    this.message2 ='Fetching data...'
    let response:any = await this.buyLaptop
    console.log(response);
    
    this.message2 = response.brand
  }

  //////EXAMPLE --3

  //promise
  // fetch3(){
  //   this.message3 = 'Fetching data...'
  //   this.buyLaptop2.then(res => {
  //     console.log(res);
  //     this.message3 = res
  //   })
  // }

  //async await
  async fetch3(){
    this.message3 = 'Fetching data...'
    let response = await this.buyLaptop2;
    console.log(response);
    this.message3 = response
  }





}


