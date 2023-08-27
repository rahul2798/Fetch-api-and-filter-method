import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private resptAPI = 'https://jsonplaceholder.typicode.com/users';

  data: Object;
  constructor(private http: HttpClient) {}

  public dataTransfer = new Subject<any>();

  // apicall() {
  //   this.http.get(resptAPI).subscribe((res) => {
  //     this.data = res;
  //     console.log(this.data);
  //   });
  // }

  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.resptAPI);
  // }

  // getUsers(){
  //   return this.http.get<any>(this.resptAPI);
  // }
}
