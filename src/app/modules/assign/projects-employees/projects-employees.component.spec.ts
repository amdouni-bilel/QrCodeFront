import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEmployeesComponent } from './projects-employees.component';

describe('ProjectsEmployeesComponent', () => {
  let component: ProjectsEmployeesComponent;
  let fixture: ComponentFixture<ProjectsEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
