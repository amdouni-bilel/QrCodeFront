import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPhoneToEmployeeComponent } from './assign-phone-to-employee.component';

describe('AssignPhoneToEmployeeComponent', () => {
  let component: AssignPhoneToEmployeeComponent;
  let fixture: ComponentFixture<AssignPhoneToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPhoneToEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPhoneToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
