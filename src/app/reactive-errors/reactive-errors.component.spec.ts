import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveErrorsComponent } from './reactive-errors.component';

describe('ReactiveErrorsComponent', () => {
  let component: ReactiveErrorsComponent;
  let fixture: ComponentFixture<ReactiveErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveErrorsComponent]
    });
    fixture = TestBed.createComponent(ReactiveErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
