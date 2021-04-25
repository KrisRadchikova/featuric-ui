import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { test },
              private router: Router) {
  }

  redirect(url: string): void {
    this.router.navigate([url]);
  }
}
