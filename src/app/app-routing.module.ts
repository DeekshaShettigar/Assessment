import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarInfoComponent } from './car-info/car-info.component';

const routes: Routes = [
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'car-info', component: CarInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
