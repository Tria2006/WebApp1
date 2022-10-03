import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.http.get<any>('https://localhost:44374/Test/GetNumber').subscribe(res => {
    //   var a = 0;
    // })

    this.http.post<any>('https://localhost:44374/Test/TestNumber', {}).subscribe(res => {
      var a = 0;
    })

  }
}
