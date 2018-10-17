import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
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
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  movies=MovieArr;
  searchStr:string;
  constructor() { }

  ngOnInit() {
  }

}
