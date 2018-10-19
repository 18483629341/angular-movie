//主要是针对跨域请求
import {Injectable} from '@angular/core';
import {Jsonp,URLSearchParams} from '@angular/http';
import { map } from "rxjs/operators";
import 'rxjs/Rx';
//自带 map处理方法   
//使用map 方法，因版本6有点问题， cnpm install --save rxjs-compat

//URLSearchParams 用于处理URL中查询的字符串
//rxjs 适用于异步场景，交互接口请求/事件。。。
@Injectable()
export class MoviesService{
  apikey:string;
  constructor(private _jsonp:Jsonp){
     this.apikey='fed69657ba4cc6e1078d2a6a95f51c8c';
  }
  //获取分类
  public getGenres(){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    //获取分类
    return this._jsonp
    .get("https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK"+"&"+"api_key="+this.apikey)
    .map(res=>{
      return res.json();
    })
  }
}