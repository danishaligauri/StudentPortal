import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAppComponent } from './login-app/login-app.component';
import { MaterialModule } from  './material/material.module';
import { HeaderAppComponent } from './header-app/header-app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    HeaderAppComponent,
    StudentDetailComponent,
    HomeAppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
