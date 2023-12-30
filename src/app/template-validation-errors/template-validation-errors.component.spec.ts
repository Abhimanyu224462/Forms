import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValidationErrorsComponent } from './template-validation-errors.component';

describe('TemplateValidationErrorsComponent', () => {
  let component: TemplateValidationErrorsComponent;
  let fixture: ComponentFixture<TemplateValidationErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateValidationErrorsComponent]
    });
    fixture = TestBed.createComponent(TemplateValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
