import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesEmployeesComponent } from './phones-employees.component';

describe('PhonesEmployeesComponent', () => {
  let component: PhonesEmployeesComponent;
  let fixture: ComponentFixture<PhonesEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
