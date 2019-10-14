import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(user: Users): Promise<any> {
    
    if (user.username !== '' && user.password !== '') {
      return this.http
        .get('assets/Login.json')
        .toPromise()
        .then(response => response)
        //.then(response => console.log(response))
        .catch(() => console.log("error")
        )
    }
  }
  getData(){
    return this.http
    .get('assets/data.json')
   
  }
}
