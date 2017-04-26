import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTPComponent } from './HTTPComponent.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ HTTPComponent]
})
export class HTTPCSVModule { }