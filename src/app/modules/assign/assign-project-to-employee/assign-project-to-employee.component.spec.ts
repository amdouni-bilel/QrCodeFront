import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectToEmployeeComponent } from './assign-project-to-employee.component';

describe('AssignProjectToEmployeeComponent', () => {
  let component: AssignProjectToEmployeeComponent;
  let fixture: ComponentFixture<AssignProjectToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProjectToEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignProjectToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
