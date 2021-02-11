import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './component/houses/houses.component';
import { GryffindorComponent } from './component/gryffindor/gryffindor.component';

const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'gryffindor', component: GryffindorComponent },
  { path: 'gryffindor/:id', component: GryffindorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
