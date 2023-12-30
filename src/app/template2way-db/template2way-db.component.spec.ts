import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template2wayDBComponent } from './template2way-db.component';

describe('Template2wayDBComponent', () => {
  let component: Template2wayDBComponent;
  let fixture: ComponentFixture<Template2wayDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Template2wayDBComponent]
    });
    fixture = TestBed.createComponent(Template2wayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
