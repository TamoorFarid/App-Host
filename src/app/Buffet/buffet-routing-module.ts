import { CanActiveService } from './../guard.service';
import { BuffetPaymentsComponent } from './buffet-payments/buffet-payments.component';
import { BuffetDetailsComponent } from './buffet-details/buffet-details.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { BuffetComponent } from './buffet/buffet.component';

const buffetRoutes:Routes=[
  {path:'buffet',component:BuffetComponent,},
  {path:'buffet/:id',component:BuffetDetailsComponent,canActivate:[CanActiveService]},
  {path:'buffet-payments',component:BuffetPaymentsComponent}
];
@NgModule({
  imports:[RouterModule.forChild(buffetRoutes)],
  exports:[RouterModule]
})
export class buffetRoutingModule{



}
