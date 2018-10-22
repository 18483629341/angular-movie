import { Component, OnInit,Input ,Output } from '@angular/core';

interface Movie{
   
}
@Component({
  selector: 'movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  @Input() movie:Object;
  //@Output() changeId
  constructor() { }

  ngOnInit() {
  }

}
