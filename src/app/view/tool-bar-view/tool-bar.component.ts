import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../model/category';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  copyLink(): void {
  }
}
