import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(private http: Http) { }

  login(email: String, password: String): Promise<any> {
    const data = {email: email, password: password};
    return this.http.post(environment.api + 'login', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  register(name: String, email: String): Promise<any> {
    const data = {name: name, email: email};
    return this.http.post(environment.api + 'register', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

}
