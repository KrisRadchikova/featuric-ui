import {Component, OnInit} from '@angular/core';
import {TestService} from '../../serivce/test.service';
import {Test} from '../../model/test';
import {ActivatedRoute} from '@angular/router';
import {Globals} from '../../global';

@Component({
  selector: 'app-test-beginning',
  templateUrl: './test-beginning.component.html',
  styleUrls: ['./test-beginning.component.scss']
})
export class TestBeginningComponent implements OnInit {

  testId;
  test: Test;

  constructor(private testService: TestService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.testId = paramMap.get('testId');
      // this.testService.getTestById(this.testId).subscribe(test => {
      this.test = Globals.tests[0];
      // alert(this.test.id);
      // });
    });
  }
}
