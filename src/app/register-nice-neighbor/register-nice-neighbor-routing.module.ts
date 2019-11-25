import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterNiceNeighborComponent } from './register-nice-neighbor.component';

const routes: Routes = [{ path: '', component: RegisterNiceNeighborComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterNiceNeighborRoutingModule { }
