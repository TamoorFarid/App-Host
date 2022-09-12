import { RoomsModel } from './../rooms.model';
import { RoomsService } from './../rooms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms:RoomsModel[]=[]
  constructor(private RoomsService:RoomsService) { }

  ngOnInit(): void {
    console.log('rooms loaded!')

    this.rooms=this.RoomsService.getAllRooms()
  }

}
