import { BuffetModel } from './buffet.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuffetService {
  payments:BuffetModel[]=[]
  buffet:BuffetModel[]=[
    {
      id:1,
      slot:'9am-11am',
      desc:'Get an unmatched buffet experience with 50+ dishes.',
      imgUrl:'assets/images/slot1.jpg'
    },
    {
      id:2,
      slot:'12am-1pm',
      desc:'Get an unmatched buffet experience with 50+ dishes.',
      imgUrl:'assets/images/slot2.jpg'
    },
    {
      id:3,
      slot:'2pm-3pm',
      desc:'Get an unmatched buffet experience with 50+ dishes.',
      imgUrl:'assets/images/slot3.jpg'
    },
    {
      id:4,
      slot:'4pm-5pm',
      desc:'Get an unmatched buffet experience with 50+ dishes.',
      imgUrl:'assets/images/slot4.jpg'
    },
  ]


  getAllBuffet(){
    return [...this.buffet]
  }
}
