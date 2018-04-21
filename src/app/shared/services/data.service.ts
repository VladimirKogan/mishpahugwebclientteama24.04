import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  data = {};
  picture = '../../../../assets/images/noAvatarBoy.png'; // default avatar picture!!!!!!!!

  savePicture(picture) {
    this.picture = picture;
  }

  getPicture() {
    return this.picture;
  }

  saveData(obj) {
    this.data = obj;
  }

  getData() {
    return this.data;
  }
}
