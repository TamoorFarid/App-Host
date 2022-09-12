import { RoomsService } from './../rooms.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.scss']
})
export class RoomsDetailsComponent implements OnInit {
  rooms:any;
  roomId:any;
  constructor(private router:Router,private route:ActivatedRoute,private roomser:RoomsService) { }

  ngOnInit(): void {
    console.log('rooms details loaded!')

    this.route.paramMap.subscribe((params)=>{
      this.roomId=params.get('id')
      this.rooms=this.roomser.rooms.find(x=>x.id == this.roomId)
    })
  }
  addToPayment(){
    this.roomser.roomPayment=this.rooms;
    this.router.navigate(['/room-payment'],{relativeTo:this.route})
  }

}
