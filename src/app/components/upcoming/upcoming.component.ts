import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {selfHttp} from '../../app.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers:[HttpClient]
})
export class UpcomingComponent implements OnInit {
  lists:any;
  url:string='http://127.0.0.1:3333';
  //在webvip 中的项目vue-jd 用node serverM.js 开启服务器  --》indexM.js    文件
  //启动  mysql  开启phpstudy
  constructor(private http:HttpClient) {
    this.http.get('http://127.0.0.1:3333/home').subscribe(res=>{
      console.log(res);
      this.lists=res;
    })
   }
  ngOnInit() {
  }

}
