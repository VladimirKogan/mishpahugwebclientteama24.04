import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RequestsService {

  private baseUrl = 'http://localhost:3000'; /*'https://c86d1e63-e648-45b8-aa75-8d6df579497c.mock.pstmn.io';*/

  constructor(private http: HttpClient) {
  }

  getStaticFields() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json;'
    });
    return this.http.get(this.baseUrl + '/staticfields', {headers});
  }


  regUserProfile(value: any) {
    const token = JSON.parse(localStorage.getItem('TOKEN'));
    console.log(token);
    const headers = new HttpHeaders({
      'Content-type': 'application/json;',
      'Authorization': token
    });
    return this.http.post(this.baseUrl + '/profile', value, {headers});
  }
}
