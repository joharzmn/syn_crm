import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.loadData();
  }

  loadData() {
    this.http.get("localhost:5000/api/mail").subscribe(data => {
      alert("Success");
    }, error => {
      alert("Error");
    });
  }

}
