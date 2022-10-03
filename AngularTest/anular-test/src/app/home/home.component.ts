import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.http.get<any>('https://localhost:44374/Test/GetNumber').subscribe(res => {
    //   var a = 0;
    // })

    this.http.post<any>('https://localhost:44374/Test/TestNumber', {num1: 123, str1: 'dsgsngsbkjgqrsabj'}).subscribe(res => {
      this.message = res.message;
      
    })

  }
}
