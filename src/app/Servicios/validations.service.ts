import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(private http: Http) { }

  login(email: String, pasword: String): Promise<any> {
    const data = {email: email, pasword: pasword};
<<<<<<< HEAD
=======
    JSON.stringify(console.log(data));
>>>>>>> d0a6c263891299989148eac35ac2b02e56329c52
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
