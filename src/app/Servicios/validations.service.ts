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
    return this.http.post(environment.api + 'login', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  users(nombre: String, apellido: String, usuario:String, carrera:String, email: String, pasword: String): Promise<any> {
    const data = {nombre: nombre, apellido: apellido, usuario: usuario, carrera: carrera, email: email, pasword: pasword};
    return this.http.post(environment.api + 'users', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

}
