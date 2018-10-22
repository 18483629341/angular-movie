import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {MoviesService} from './../../movies.server';

interface Obj{
  imgSrc:string,
  name:string
}

const MovieArr:Obj[]=[
  {imgSrc:"",name:"birth's door"},
  {imgSrc:"",name:"hello d"},
]
@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers:[MoviesService]
})
export class ListsComponent implements OnInit {
  movies:Object=null;
  searchStr:string='';
  searchLists:Object=null;
  title;
  constructor(private http: MoviesService) {
    this.title='Top Rated Movies 顶级电影';
  this.http.getMovies("top_rated").subscribe(res=>{
    //console.log(res);
    this.movies=res.results;
  })
  }

  ngOnInit() {
  }
  searchMovies(){
    this.title='搜索结果';
    this.http.searchMovies(this.searchStr).subscribe(res=>{
     // console.log(res);
      this.movies=res.results;
    })
  }

}
