import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {selfHttp} from '../../app.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  //providers:[HttpClient]   //HttpClient这里一定要在providers里面引入
  providers:[selfHttp]
})
export class UpcomingComponent implements OnInit {
  lists:any;
  url:string='http://127.0.0.1:3333';
  //在webvip 中的项目vue-jd 用node serverM.js 开启服务器  --》indexM.js    文件
  //启动  mysql  开启phpstudy
  /*constructor(private http:HttpClient) {////在单独的服务里面用   private  来声明
    this.http.get('http://127.0.0.1:3333/home').subscribe(res=>{
      console.log(res);
      this.lists=res;
    })
  }*/
  constructor(private http:selfHttp) {//使用公共服务文件好的方法
    this.http.get('/home',res=>{this.lists=res})//后面为回调函数
    //this.http.post('/home',{id:1},res=>{this.lists=res})//后面为回调函数
  }
  ngOnInit() {
  }

}
