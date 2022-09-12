import { BuffetService } from './../buffet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BuffetModel } from './../buffet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffet-details',
  templateUrl: './buffet-details.component.html',
  styleUrls: ['./buffet-details.component.scss']
})
export class BuffetDetailsComponent implements OnInit {
  buffetId:any;
  buffet:any;
  constructor(private buffetSer:BuffetService, private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.buffetId=params.get('id');
      this.buffet=this.buffetSer.buffet.find(x=>x.id==this.buffetId)
    })
  }
  payments(){
    this.buffetSer.payments=this.buffet;
    this.router.navigate(['/buffet-payments'],{relativeTo:this.route})
  }

}
