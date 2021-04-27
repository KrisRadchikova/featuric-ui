import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.scss']
})
export class DialogContentExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { test }) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
