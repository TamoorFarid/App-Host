import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from './../rooms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-payment',
  templateUrl: './room-payment.component.html',
  styleUrls: ['./room-payment.component.scss']
})
export class RoomPaymentComponent implements OnInit {
  roomRent:any;
  alert:boolean=false;
  numberofnights!:number;
  constructor(private router:Router,private roomSer:RoomsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.roomRent=this.roomSer.roomPayment;
    console.log(this.roomRent)
  }
  payed(){
      this.alert=true;
      setTimeout(() => {
        this.alert=false
        this.router.navigate(['/home'])
      }, 2000);
  }

}
