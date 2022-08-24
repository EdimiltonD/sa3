import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';

const Routes: Routes = [
  {path:'', component: HomeComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { } 
