
import {Routes} from "@angular/router";

import { ListsComponent } from './components/lists/lists.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularComponent } from './components/popular/popular.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PlayDetailComponent } from './components/play-detail/play-detail.component';
import { MoviesComponent } from './components/movies/movies.component';


export const appRoutes:Routes=[
  {path:"",component:ListsComponent,pathMatch:'full'},
  {path:"lists",component:ListsComponent},
  {path:"upcoming",component:UpcomingComponent,pathMatch:'full'},
  {path:"popular",component:ListsComponent,pathMatch:'full'},
  {path:"movieDetail/:id",component:MovieDetailComponent},
  {path:"playDetail",component:PlayDetailComponent},
  {path:"genres/:id/:name",component:MoviesComponent}
]