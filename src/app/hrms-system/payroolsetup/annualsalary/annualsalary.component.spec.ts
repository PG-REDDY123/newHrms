import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualsalaryComponent } from './annualsalary.component';

describe('AnnualsalaryComponent', () => {
  let component: AnnualsalaryComponent;
  let fixture: ComponentFixture<AnnualsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnualsalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
