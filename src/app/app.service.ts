import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";//anguar 4.3以上版本才支持
//HttpClient  可以用来提供高效的、最新的、功能丰富的支持HTTP协议的客户端编程工具包
@Injectable()
export class selfHttp{
  //以下的写法是比较标准的写法
  public restServer;//在公共的服务里面用   public  来声明
  public http;
  constructor(Http:HttpClient){
    this.http=Http;
    this.restServer='http://127.0.0.1:3333';
    //在webvip 中的项目vue-jd 用node serverM.js 开启服务器  --》indexM.js    文件
  //启动  mysql  开启phpstudy
  }
  public get(url,fun?:Function){//?表示使用时，参数可传，也可以不传
    this.http.get(this.restServer+url).subscribe(data=>{
      console.log(data);
     fun(data);//执行 回调函数
    })
  }
  //
  public post(url,data?:Object,fun?:Function){
    this.http.post(this.restServer+url,data).subscribe(data=>{
     fun(data);//执行 回调函数
    })
  }

}