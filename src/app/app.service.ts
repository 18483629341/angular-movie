import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";//anguar 4.3以上版本才支持
//HttpClient  可以用来提供高效的、最新的、功能丰富的支持HTTP协议的客户端编程工具包
@Injectable()
export class selfHttp{
  public restServer;
  public http;
  constructor(Http:HttpClient){
    this.http=Http;
    this.restServer='http://127.0.0.1:3333';
  }
  public get(url,fun?:Function){
    this.http.get(this.restServer+url).subscribe(data=>{
      console.log(data);
      fun(data);
    })
  }

}