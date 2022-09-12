import { CanActiveService } from './../guard.service';
import { AuthService } from './../auth.service';
import { RouterModule } from '@angular/router';
import { BuffetComponent } from './buffet/buffet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buffetRoutingModule } from './buffet-routing-module';
import { BuffetDetailsComponent } from './buffet-details/buffet-details.component';
import { BuffetPaymentsComponent } from './buffet-payments/buffet-payments.component';



@NgModule({
  declarations: [
    BuffetComponent,
    BuffetDetailsComponent,
    BuffetPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    buffetRoutingModule
  ],
  exports:[
    BuffetComponent,
    BuffetDetailsComponent
  ],
  providers:[CanActiveService,AuthService]
})
export class BuffetModule { }
