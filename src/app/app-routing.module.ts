import { FaultyComponent } from './components/problem5/faulty/faulty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthVoltageComponent } from './components/problem3/earth-voltage/earth-voltage.component';

const routes: Routes = [
  { path: 'p3', component: EarthVoltageComponent },
  { path: 'p5', component: FaultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
