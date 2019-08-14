import { Component } from '@angular/core';
import { MoviesService } from './movies.server';

interface Obj {
  id: number,
  name: string
}
const Arr: Obj[] = [
  {id: 1 , name: '影片分类1'},
  {id: 2 , name: '影片分类1'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MoviesService]
})
export class AppComponent {
  title = 'Movies';
  genres: Obj[];
  constructor(private http: MoviesService) { // 使用公共服务文件好的方法
    this.http.getGenres().subscribe(res => {
      console.log(res);
      this.genres = res.genres;
    }); // 后面为回调函数
    // this.http.post('/home',{id:1},res=>{this.lists=res})//后面为回调函数
  }
}
