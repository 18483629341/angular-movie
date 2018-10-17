import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import {RouterModule,Routes} from "@angular/router";
import {Router} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayDetailComponent } from './components/play-detail/play-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ListsComponent } from './components/lists/lists.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


const appRoutes:Routes=[
  {path:"",component:ListsComponent,pathMatch:'full'},
  {path:"lists",component:ListsComponent},
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
    PlayDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
