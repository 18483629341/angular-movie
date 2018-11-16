import { Component, OnInit, Input } from '@angular/core';
import { MoviesService} from './../../movies.server';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  id:number;person:Object;movies:any;
  constructor( 
    private http:MoviesService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(Params=>{
       const id=Params['id'];
       this.http.getPersonDetail(id).subscribe(person => {
        this.person = person;
      });
      this.http.getPersonCast(id).subscribe(res => {
       this.movies = res.cast;
      });
    })
  }

}
