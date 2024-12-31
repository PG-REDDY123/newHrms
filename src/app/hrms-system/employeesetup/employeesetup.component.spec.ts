import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesetupComponent } from './employeesetup.component';

describe('EmployeesetupComponent', () => {
  let component: EmployeesetupComponent;
  let fixture: ComponentFixture<EmployeesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
