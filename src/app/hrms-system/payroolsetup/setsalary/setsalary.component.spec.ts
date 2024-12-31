import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsalaryComponent } from './setsalary.component';

describe('SetsalaryComponent', () => {
  let component: SetsalaryComponent;
  let fixture: ComponentFixture<SetsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetsalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
