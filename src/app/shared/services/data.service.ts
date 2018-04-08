import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  data = {};
  saveData(obj) {
    this.data = obj;
  }
  getData() {
    return this.data;
  }
}
