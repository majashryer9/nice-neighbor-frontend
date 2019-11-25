import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'nice-neighbor-services', loadChildren: () => import('./nice-neighbor-services/nice-neighbor-services.module').then(m => m.NiceNeighborServicesModule) },
  { path: 'register-nice-neighbor', loadChildren: () => import('./register-nice-neighbor/register-nice-neighbor.module').then(m => m.RegisterNiceNeighborModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
