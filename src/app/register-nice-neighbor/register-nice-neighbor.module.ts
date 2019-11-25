import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterNiceNeighborRoutingModule } from './register-nice-neighbor-routing.module';
import { RegisterNiceNeighborComponent } from './register-nice-neighbor.component';


@NgModule({
  declarations: [RegisterNiceNeighborComponent],
  imports: [
    CommonModule,
    RegisterNiceNeighborRoutingModule
  ]
})
export class RegisterNiceNeighborModule { }
