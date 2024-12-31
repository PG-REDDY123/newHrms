import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingHrComponent } from './reporting-hr.component';

describe('ReportingHrComponent', () => {
  let component: ReportingHrComponent;
  let fixture: ComponentFixture<ReportingHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingHrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
