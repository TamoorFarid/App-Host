import { ActivatedRoute, Route, Router } from '@angular/router';
import { BuffetService } from './../buffet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffet-payments',
  templateUrl: './buffet-payments.component.html',
  styleUrls: ['./buffet-payments.component.scss']
})
export class BuffetPaymentsComponent implements OnInit {
  buffetPayments:any;
  alert:boolean=false
  constructor(private buffetSer:BuffetService,private router:Router) { }

  ngOnInit(): void {
    this.buffetPayments=this.buffetSer.payments
  }
  book(){
    this.alert=true;
    setTimeout(() => {
      this.alert=false
      this.router.navigate(['/home'])
    }, 2000);
  }
}
