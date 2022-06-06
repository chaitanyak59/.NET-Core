import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("https://localhost:5001/users")
             .pipe(catchError((err, _) => {
               console.error("Request Failed ", err.toString());
               this.users = [];
               return throwError(err.message || 'server Error');
             }))
             .subscribe((list) => {
               this.users = list;
             })
  }
}
