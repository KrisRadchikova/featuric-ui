import {Component, OnInit} from '@angular/core';
import {Test} from '../../model/test';
import {TestService} from '../../serivce/test.service';
import {CategoryService} from '../../serivce/category.service';
import {Category} from '../../model/category';
import {Globals} from '../../global';

@Component({
  selector: 'app-tests-catalog-page',
  templateUrl: './tests-catalog-page.component.html',
  styleUrls: ['./tests-catalog-page.component.scss']
})
export class TestsCatalogPageComponent implements OnInit {

  tests: Test[];
  categories: Category[];

  constructor(private testService: TestService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
      // TODO Delete
      this.categories = Globals.categories;
    });
    this.testService.getAll().subscribe(tests => {
      this.tests = tests;
      // TODO Delete
      this.tests = Globals.tests;
    });
  }

  copyLink(): void {
  }
}
