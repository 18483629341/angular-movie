import { Component, OnInit } from '@angular/core';
import { MoviesService} from './../../movies.server';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MoviesService]
})
export class MovieDetailComponent implements OnInit {
  id:number;
  movie:Object;
  cast:Object;
  similarMovies:Object;
  reviews:Object;
  constructor(  
    private http:MoviesService,
    private route:ActivatedRoute,
    private router:Router)
   { 
     this.route.params.subscribe(Params=>{
       this.id=Params['id'];
     })

  }

  ngOnInit() {
    this.http.movieDetail(this.id).subscribe(res=>{
      //console.log(res);
      this.movie=res;
    })
    this.http.movieReviews(this.id).subscribe(res=>{
     console.log(res);
      this.reviews=res.results;
    })
    this.http.movieCredits(this.id).subscribe(res=>{
     console.log(res);
      this.cast=res.cast.slice(0,4);
    })
    this.http.similarMovies(this.id).subscribe(res=>{
     // console.log(res);
      this.similarMovies=res.results;
    })
  }

}
