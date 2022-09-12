import { Injectable } from '@angular/core';
import { RoomsModel } from './rooms.model';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomPayment:RoomsModel[]=[];
  rooms:RoomsModel[]=[
    {
      id:1,
      name:'Executive Room',
      rent:90,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room1.jpg'
    },
    {
      id:2,
      name:'Executive Room',
      rent:100,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room1.jpg'
    },
    {
      id:3,
      name:'Executive Room',
      rent:90,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room2.jpg'
    },
    {
      id:4,
      name:'Executive Room',
      rent:90,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room3.jpg'
    },
    {
      id:5,
      name:'Executive Room',
      rent:90,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room1.jpg'
    },
    {
      id:6,
      name:'Executive Room',
      rent:90,
      desc:"A large room with a huge space and luxurious feel. Have an experience like never before.",
      imgUrl:'assets/images/room2.jpg'
    },
  ]
  getAllRooms(){
    return [...this.rooms]
  }
}
