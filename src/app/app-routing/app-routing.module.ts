import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';

const Routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Login",component: LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { } 
