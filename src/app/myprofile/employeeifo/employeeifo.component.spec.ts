import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeifoComponent } from './employeeifo.component';

describe('EmployeeifoComponent', () => {
  let component: EmployeeifoComponent;
  let fixture: ComponentFixture<EmployeeifoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeifoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeifoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
