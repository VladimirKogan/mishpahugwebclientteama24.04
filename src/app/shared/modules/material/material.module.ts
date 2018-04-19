import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule,
<<<<<<< HEAD
  MatTabsModule,
  MatListModule,
  MatCheckboxModule, MatTooltipModule, MatTooltip
} from '@angular/material';

=======
  MatTooltipModule,
  MatPaginatorModule
} from '@angular/material';
>>>>>>> 983db80bec912057036d4ff0e6737d7bd542d002


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
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
<<<<<<< HEAD
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
=======
>>>>>>> 983db80bec912057036d4ff0e6737d7bd542d002
    MatTooltipModule
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
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
<<<<<<< HEAD
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltip
=======
    MatTooltipModule
>>>>>>> 983db80bec912057036d4ff0e6737d7bd542d002
  ]
})
export class MaterialModule {
}
