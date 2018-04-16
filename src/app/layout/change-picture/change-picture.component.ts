import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {ImgcropComponent} from '../../shared/components/imgcrop/imgcrop.component';
import {DataService} from '../../shared/services/data.service';
import {isUndefined} from "ngx-bootstrap/chronos/utils/type-checks";

@Component({
  selector: 'app-change-picture',
  templateUrl: './change-picture.component.html',
  styleUrls: ['./change-picture.component.scss']
})
export class ChangePictureComponent implements OnInit {
  picture = '';

  constructor(private dialog: MatDialog,
              private data: DataService) {
  }

  ngOnInit() {
    this.picture = this.data.getPicture();
  }

  openImageCropper() {
    const dialogRef = this.dialog.open(ImgcropComponent, {
      autoFocus: false,
      // disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'undefined') {
        this.picture = this.data.getPicture();
      } else {
      this.picture = result;
      }
    });

  }
}
