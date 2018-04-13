import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ImgcropComponent} from '../../shared/components/imgcrop/imgcrop.component';

@Component({
  selector: 'app-change-picture',
  templateUrl: './change-picture.component.html',
  styleUrls: ['./change-picture.component.scss']
})
export class ChangePictureComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openImageCropper() {
    this.dialog.open(ImgcropComponent, {
      autoFocus: false
    });
  }

}
