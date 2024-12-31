import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingSetupComponent } from './reporting-setup.component';

describe('ReportingSetupComponent', () => {
  let component: ReportingSetupComponent;
  let fixture: ComponentFixture<ReportingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
