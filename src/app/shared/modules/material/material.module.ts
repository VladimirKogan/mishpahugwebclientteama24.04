import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatToolbarModule,
<<<<<<< HEAD
  MatPaginatorModule
} from '@angular/material';
=======
  MatSelectModule } from '@angular/material';

>>>>>>> be13a0eba7c967948a838d0ace76f719bb6f7bce


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
<<<<<<< HEAD
    MatDialogModule,
    MatPaginatorModule
=======
    MatSelectModule,
    MatDialogModule
>>>>>>> be13a0eba7c967948a838d0ace76f719bb6f7bce
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
<<<<<<< HEAD
    MatDialogModule,
    MatPaginatorModule
=======
    MatSelectModule,
    MatDialogModule
>>>>>>> be13a0eba7c967948a838d0ace76f719bb6f7bce
  ]
})
export class MaterialModule {
}
