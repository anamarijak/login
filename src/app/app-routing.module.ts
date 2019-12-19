import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'login', component: LoginScreenComponent},
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
