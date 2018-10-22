import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import{ MoviesService }from "./../../movies.server";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {
  id:number;
  name:string;
  movies:any;
  constructor(
    public http:MoviesService,
    private route:ActivatedRoute,
    private router:Router,
  
  ) {
    this.route.params.subscribe((params:Params)=>{
      console.log(params.id);
      this.id=params.id;
      this.name=params.name;
      //this.user['id']=params.id;
      //这里路劲每跳转时，渲染一次
      this.http.getMoviesByGenre(this.id).subscribe(res=>{
        console.log(res);
        this.movies=res.results;
      })
    });
   }

  ngOnInit() {//这里只渲染一次，路劲跳转时，不渲染
    //this.http.getMoviesByGenre(this.id).subscribe(res=>{
    //  console.log(res);
    //  this.movies=res.results;
   // })
   
    
  }

}
