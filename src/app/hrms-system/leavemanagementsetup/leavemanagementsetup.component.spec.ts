import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanagementsetupComponent } from './leavemanagementsetup.component';

describe('LeavemanagementsetupComponent', () => {
  let component: LeavemanagementsetupComponent;
  let fixture: ComponentFixture<LeavemanagementsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavemanagementsetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavemanagementsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
