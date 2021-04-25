import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../model/test';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from './dialog/dialog-content-example-dialog';

@Component({
  selector: 'app-test-card-view',
  templateUrl: './test-card-view.component.html',
  styleUrls: ['./test-card-view.component.scss']
})
export class TestCardViewComponent implements OnInit {

  @Input()
  tests: Test[];

  @Input()
  categories: Category[];

  constructor(public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  openDialog(startTest: Test): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      data: {test: startTest}
    });

    dialogRef.afterClosed().subscribe(testId => {
      if (testId) {
        this.router.navigateByUrl('/test_beginning/' + testId).then();
      }
    });
  }
}
