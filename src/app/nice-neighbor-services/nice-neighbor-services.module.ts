import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiceNeighborServicesRoutingModule } from './nice-neighbor-services-routing.module';
import { NiceNeighborServicesComponent } from './nice-neighbor-services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';


@NgModule({
  declarations: [NiceNeighborServicesComponent, ServiceCardComponent, ServicePageComponent],
  imports: [
    CommonModule,
    NiceNeighborServicesRoutingModule
  ]
})
export class NiceNeighborServicesModule { }
