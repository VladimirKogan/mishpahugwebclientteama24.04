import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://c86d1e63-e648-45b8-aa75-8d6df579497c.mock.pstmn.io';

  registrate(email, password) {
    // we can create separate call User with fields email and password and put him into request
    const url = this.baseUrl + '/registration';
    const token = 'Basic dGVzdEBtYWlsLmNvbToxMjM0NQ==';
   // Base Auth
   // const token = 'Basic ' + btoa(email + ':' + password);
    // in case we put in token use email and password like token
    // localStorage.setItem('token', (email + '&' + password));
    localStorage.setItem('token', token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : token
      })
    };
    return this.http.post(url, {email, password}, httpOptions);
  }

  login(email, password) {
    const url = this.baseUrl + '/login';
    const token = 'Basic dGVzdEBtYWlsLmNvbToxMjM0NQ==';
   // Base auth
   // const token = 'Basic ' + btoa(email + ':' + password);

    // in case we put in token use email and password like token
    // localStorage.setItem('token', (email + '&' + password));
    localStorage.setItem('token', token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : token
      })
    };
    return this.http.post(url, {email, password}, httpOptions);
  }
}
