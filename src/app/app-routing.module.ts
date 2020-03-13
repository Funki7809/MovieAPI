import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from "./shared/components/home-component/home-component.component";
import { MoviesComponentComponent } from "./shared/components/movies-component/movies-component.component";
import { DetailsComponentComponent } from "./shared/components/details-component/details-component.component";
const routes: Routes = [
  { path:'', component:HomeComponentComponent },
  { path:'movies/:id', component:MoviesComponentComponent },
  { path:'details/:id', component:DetailsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
