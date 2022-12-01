import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadReviewComponent } from './load-review.component';

describe('LoadReviewComponent', () => {
  let component: LoadReviewComponent;
  let fixture: ComponentFixture<LoadReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
