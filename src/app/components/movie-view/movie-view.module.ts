import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {appRoutes } from '../../app.routes';
//不建议封装模块
import { MovieViewComponent } from './movie-view.component';//公共模块的引用2
import {CommonModule} from "@angular/common";//公共模块的引用1


@NgModule({
  declarations: [
    MovieViewComponent
  ],
  imports: [
    BrowserModule,

    
  ],
  //公共模块的引用3，允许其他模块的访问
  exports:[
    CommonModule,    
    MovieViewComponent,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class MovieViewModule { }//导出模块的