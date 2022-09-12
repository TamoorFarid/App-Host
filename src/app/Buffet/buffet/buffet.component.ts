import { BuffetModel } from './../buffet.model';
import { BuffetService } from './../buffet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffet',
  templateUrl: './buffet.component.html',
  styleUrls: ['./buffet.component.scss']
})
export class BuffetComponent implements OnInit {
  buffet:BuffetModel[]=[]
  constructor(private buffetSer:BuffetService) { }

  ngOnInit(): void {
    console.log('buffet loaded!')
    this.buffet=this.buffetSer.getAllBuffet()
  }

}
