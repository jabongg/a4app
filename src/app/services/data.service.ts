import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http : Http) { 
    console.log("data service connected");
  }
 
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

  sayHello() {
    return this.http.get('http://192.168.1.2:8081/hello')
    .map(res => res.json());
  }
}
