import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {Globals} from '../../global';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  @Input()
  categories: Category[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
