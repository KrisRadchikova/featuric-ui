import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
  styleUrls: ['./dialog-content.scss']
})
export class DialogContentComponent {

  constructor(public dialogRef: MatDialogRef<DialogContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { test }) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
