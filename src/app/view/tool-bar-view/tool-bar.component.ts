import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Input()
  isSidenav: boolean;

  @Input()
  categories: Category[];

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  copyLink(): void {
    this._snackBar.open('Ссылка на главную страницу скопирована.', 'CTRL + C', {
      duration: 2000,
    });

  }
}
