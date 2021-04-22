import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsCatalogPageComponent } from './tests-catalog-page.component';

describe('TestsCatalogPageComponent', () => {
  let component: TestsCatalogPageComponent;
  let fixture: ComponentFixture<TestsCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsCatalogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
