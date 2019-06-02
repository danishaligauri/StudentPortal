import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginAppComponent } from './login-app/login-app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HomeAppComponent } from './home-app/home-app.component';

import { AuthGaurdService } from 'src/app/services/auth-gaurd.service';

const routes: Routes = [
  {path: '', component: LoginAppComponent},
  {path: 'home', component: HomeAppComponent,canActivate:[AuthGaurdService]},
  {path: 'students', component: StudentDetailComponent,canActivate:[AuthGaurdService]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
