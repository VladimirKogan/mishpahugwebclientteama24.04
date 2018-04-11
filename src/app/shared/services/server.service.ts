import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EventListCardModel} from '../models/evnt-list-card.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';  /*https://c86d1e63-e648-45b8-aa75-8d6df579497c.mock.pstmn.io';*/

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
<<<<<<< HEAD
  getListOfEventsInProgress(page: number, size: number, data: Object): Observable<EventListCardModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // return this.http.post(this.BASE_URL + '/events?page={' + page + '}&size={' + size + '}', data, this.httpOptions)
    return this.http.get('http://localhost:3000/')
      .map(cardsData => {
        const cardsList = cardsData[0];
        return cardsList.map(function (card: any) {
          return {
            eventId: card.eventId,
            title: card.title,
            date: card.date,
            city: card.address.city,
            owner: card.owner.fullname,
            picture: card.owner.picturelink[1],
            rate: card.owner.rate
          };
        });
      });
  }

  getContent(): Observable<EventListCardModel[]> {
    return this.http.get('http://localhost:3000/content').map((cards: any) => {
      return cards.map((card) => {
        return new EventListCardModel(card['eventId'],
          card['title'], card['date'], card['address']['city'],
          card['owner']['fullName'], card['owner']['pictureLink'][1],
          card['owner']['rate']);
      });
    });
=======

  getStaticFields() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json;'
    });
    return this.http.get(this.baseUrl + '/staticfields', {headers});
  }


  regUserProfile(value: any) {
    const token = localStorage.getItem('token');
    // console.log(token);
    const headers = new HttpHeaders({
      'Content-type': 'application/json;',
      'Authorization': token
    });
    return this.http.post(this.baseUrl + '/profile', value, {headers});
>>>>>>> be13a0eba7c967948a838d0ace76f719bb6f7bce
  }
}
