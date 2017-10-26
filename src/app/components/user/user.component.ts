import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name  : string;
  age   : number;
  email : string;
  address : Address;
  hobbies : string[];
  hello   : string;

  constructor( private dataService : DataService) { 
    console.log(" user constructor ran ");
  }

  ngOnInit() {
    console.log('ngOnIt called');
    this.name = 'sehwag';
    this.age  = 42;
    this.email  = 'jbpvns@gmail.com';

    this.address = {
      city : 'mumbai',
      street : '12/23 baker street',
      state : 'maharashtra'
    }

    this.hobbies = ['watching cricket','playing with codes','painting'];
    //this.hello = this.dataService.sayHello();
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
    });

    this.dataService.sayHello().subscribe((hello2) => {
      console.log(hello2);
      this.hello = hello2;
    });
  }

  onClick() {
    console.log("hello");
    this.name = "veeru";
    this.hobbies.push('playng football');
  }

  addHobby(hobby:string) {
    console.log("adding hobby");
    this.hobbies.unshift(hobby);
  }

}

interface Address {
  street  : string;
  city    : string;
  state   : string;
}