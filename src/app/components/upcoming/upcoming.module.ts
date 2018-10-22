import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule,JsonpModule} from "@angular/http";//jsonp 用于跨域请求
import {HttpClientModule} from "@angular/common/http";

import {RouterModule,Routes} from "@angular/router";
//import {Router} from "@angular/router";
import { UpcomingComponent } from './upcoming.component';

@NgModule({
  declarations: [
   UpcomingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class UpcomingModule { }//导出模块的
