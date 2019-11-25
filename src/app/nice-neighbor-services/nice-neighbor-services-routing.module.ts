import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiceNeighborServicesComponent } from './nice-neighbor-services.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [
  { path: '', component: NiceNeighborServicesComponent },
  { path: 'service/:type', component: ServicePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiceNeighborServicesRoutingModule { }
