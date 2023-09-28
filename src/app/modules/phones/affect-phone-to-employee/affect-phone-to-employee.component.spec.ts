import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectPhoneToEmployeeComponent } from './affect-phone-to-employee.component';

describe('AffectPhoneToEmployeeComponent', () => {
  let component: AffectPhoneToEmployeeComponent;
  let fixture: ComponentFixture<AffectPhoneToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectPhoneToEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectPhoneToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
