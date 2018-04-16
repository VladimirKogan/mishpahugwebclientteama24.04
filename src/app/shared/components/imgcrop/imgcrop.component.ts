import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Bounds, CropperSettings, ImageCropperComponent} from 'ngx-img-cropper';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-imgcrop',
  templateUrl: './imgcrop.component.html',
  styleUrls: ['./imgcrop.component.scss']
})
export class ImgcropComponent implements OnInit {
  toggle = false;
  data: any;
  cropperSettings: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  picture = '';

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  constructor( private dataServ: DataService,
               public dialogRef: MatDialogRef<ImgcropComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;

    this.cropperSettings.width = 200;
    this.cropperSettings.height = 200;

    this.cropperSettings.croppedWidth = 200;
    this.cropperSettings.croppedHeight = 200;

    this.cropperSettings.canvasWidth = 500;
    this.cropperSettings.canvasHeight = 300;

    this.cropperSettings.minWidth = 10;
    this.cropperSettings.minHeight = 10;

    this.cropperSettings.rounded = true;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

    this.data = {};
  }

  ngOnInit() {
  }

  cropped(bounds: Bounds) {
    this.croppedHeight = bounds.bottom - bounds.top;
    this.croppedWidth = bounds.right - bounds.left;
  }

  fileChangeListener($event) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
    this.toggle = true;
  }

  upload() {
    const uploadData = {
      image: this.data.image
    };
    console.log(this.data.image);
    this.dataServ.savePicture('../../../assets/images/noAvatarGirl.png');
    /*//////////////save picture on cloud and get https*/
    this.dialogRef.close('../../../assets/images/noAvatarGirl.png');

    // this.httpClient.post<Observable<any>>('apiUrl', uploadData).subscribe();
  }


}
