import {Component, OnInit} from '@angular/core';
import {Test} from '../../model/test';
import {TestService} from '../../serivce/test.service';

@Component({
  selector: 'app-tests-catalog-page',
  templateUrl: './tests-catalog-page.component.html',
  styleUrls: ['./tests-catalog-page.component.scss']
})
export class TestsCatalogPageComponent implements OnInit {

  tests: Test[];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getAll().subscribe(tests => {
      this.tests = tests;
    });
  }

}
