import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBeginningComponent } from './test-beginning.component';

describe('TestBeginningComponent', () => {
  let component: TestBeginningComponent;
  let fixture: ComponentFixture<TestBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBeginningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
