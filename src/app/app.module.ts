import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule,JsonpModule} from "@angular/http";//jsonp 用于跨域请求
import {HttpClientModule} from "@angular/common/http";

import {RouterModule,Routes} from "@angular/router";
//import {Router} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayDetailComponent } from './components/play-detail/play-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ListsComponent } from './components/lists/lists.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularComponent } from './components/popular/popular.component';
import { MoviesComponent } from './components/movies/movies.component';


const appRoutes:Routes=[
  {path:"",component:ListsComponent,pathMatch:'full'},
  {path:"lists",component:ListsComponent},
  {path:"upcoming",component:UpcomingComponent,pathMatch:'full'},
  {path:"popular",component:PopularComponent,pathMatch:'full'},
  {path:"movieDetail",component:MovieDetailComponent},
  {path:"playDetail",component:PlayDetailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SideMenuComponent,
    ListsComponent,
    MovieDetailComponent,
    PlayDetailComponent,
    UpcomingComponent,
    PopularComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
