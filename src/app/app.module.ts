import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Login} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HTTPComponent} from './HTTP/HTTPComponent.component';

import {appRoutes} from './app.routes';

@NgModule({
  imports:      [ 	BrowserModule,
  					FormsModule,
  					HttpModule,
  					JsonpModule,
  					appRoutes
  				],
  declarations: [ AppComponent,
  				  DashboardComponent,
  				  Login,
  				  RegisterComponent,
  				  HTTPComponent
  				   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
