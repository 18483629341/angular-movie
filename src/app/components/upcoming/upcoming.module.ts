import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpcomingComponent } from './upcoming.component';
import {MovieViewModule} from "../movie-view/movie-view.module";

@NgModule({
  declarations: [
   UpcomingComponent
  ],
  imports: [
    BrowserModule,
    MovieViewModule
    
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class UpcomingModule { }//导出模块的
