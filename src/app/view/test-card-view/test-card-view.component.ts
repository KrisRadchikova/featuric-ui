import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../model/test';

@Component({
  selector: 'app-test-card-view',
  templateUrl: './test-card-view.component.html',
  styleUrls: ['./test-card-view.component.scss']
})
export class TestCardViewComponent implements OnInit {

  @Input()
  test: Test;

  constructor() {
  }

  ngOnInit(): void {
  }

}
