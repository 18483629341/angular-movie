//主要是针对跨域请求
import {Injectable} from '@angular/core';
import {Jsonp,URLSearchParams} from '@angular/http';
//URLSearchParams  用于处理URL中查询的字符串
import 'rxjs/Rx';
//rxjs 适用于异步场景，交互接口请求/事件。。。
//自带 map处理方法   
//使用map 方法，因版本6有点问题， cnpm install --save rxjs-compat

@Injectable()
export class MoviesService{
  apikey:string;
  search:any;
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
    //.get("https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK&"+"api_key="+this.apikey)
    .get("https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      console.log(res);
      return res.json();
    })
  }
  public getMoviesByGenre(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    //获取分类
    return this._jsonp
    .get("https://api.themoviedb.org/3/genre/"+id+"/movies?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      console.log(res);
      return res.json();
    })
  }
  public getMovies(type){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/movie/"+type+"?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      console.log(res);
      return res.json();
    })
  }
  public searchMovies(searchStr){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    search.set('search_by','popularity')
    search.set("query",searchStr)
    return this._jsonp
    .get("https://api.themoviedb.org/3/search/movie/?callback=JSONP_CALLBACK",{search})
    .map(res=>{
     // console.log(res);
      return res.json();
    })
  }
  public movieDetail(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/movie/"+id+"?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      //console.log(res);
      return res.json();
    })
  }
  //评论
  public movieReviews(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/movie/"+id+"/reviews?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      //console.log(res);
      return res.json();
    })
  }
  //演员表
  public movieCredits(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/movie/"+id+"/credits?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      //console.log(res);
      return res.json();
    })
  }
  //推荐电影
  public similarMovies(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/movie/"+id+"/similar?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      //console.log(res);
      return res.json();
    })
  }
  //获得演员信息
  public getPersonDetail(id){
    var search=new URLSearchParams();
    search.set('lauguage','en-US');
    search.set('api_key',this.apikey);
    return this._jsonp
    .get("https://api.themoviedb.org/3/person/"+id+"?callback=JSONP_CALLBACK",{search})
    .map(res=>{
      //console.log(res);
      return res.json();
    })
  }
  public getPersonCast(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  

}