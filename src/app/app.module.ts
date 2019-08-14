import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule,JsonpModule} from "@angular/http";//jsonp 用于跨域请求
import {HttpClientModule} from "@angular/common/http";

import {RouterModule} from "@angular/router";
import {appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayDetailComponent } from './components/play-detail/play-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ListsComponent } from './components/lists/lists.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
//import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularComponent } from './components/popular/popular.component';
import { MoviesComponent } from './components/movies/movies.component';
//import { MovieViewComponent } from './components/movie-view/movie-view.component';

import { UpcomingModule} from './components/upcoming/upcoming.module'; //自定义模块
import { MovieViewModule } from "./components/movie-view/movie-view.module";


@NgModule({
  declarations: [ // 组件
    AppComponent,
    HomeComponent,
    NavComponent,
    SideMenuComponent,
    ListsComponent,
    MovieDetailComponent,
    PlayDetailComponent,
    //UpcomingComponent,
    PopularComponent,
    MoviesComponent,
    //MovieViewComponent
  ],
  imports: [// 模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    UpcomingModule, // 自定义模块
    MovieViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
