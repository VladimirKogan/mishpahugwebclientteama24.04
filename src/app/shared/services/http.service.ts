import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EventListCardModel} from '../models/evnt-list-card.model';

@Injectable()
export class HttpService {
  BASE_URL = 'https://c86d1e63-e648-45b8-aa75-8d6df579497c.mock.pstmn.io';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) {
  }

  getListOfEventsInProgress(page: number, size: number, data: Object): Observable<EventListCardModel[]> {
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

  getContent(): Observable<any> {
    return this.http.get('http://localhost:3000/content').map((cards: any) => {
      return cards.map((card) => {
        return new EventListCardModel(card['eventId'],
          card['title'], card['date'], card['address']['city'],
          card['owner']['fullName'], card['owner']['pictureLink'][0],
          card['owner']['rate']);
      });
    });
  }
}


