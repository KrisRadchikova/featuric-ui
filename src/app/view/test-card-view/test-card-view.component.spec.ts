import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardViewComponent } from './test-card-view.component';

describe('TestCardViewComponent', () => {
  let component: TestCardViewComponent;
  let fixture: ComponentFixture<TestCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
