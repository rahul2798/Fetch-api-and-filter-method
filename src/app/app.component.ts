import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data1: () => void;
  users: any = [];
  searchText: string;
  //name = 'Angular ' + VERSION.major;
  constructor(private service: ApiService, private http: HttpClient) {}
  ngOnInit(): void {
    // this.service.getUsers().subscribe((users) => {
    //   this.users = users;
    //   console.log(this.users);
    // });

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }
}
