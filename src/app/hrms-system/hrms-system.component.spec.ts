import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsSystemComponent } from './hrms-system.component';

describe('HrmsSystemComponent', () => {
  let component: HrmsSystemComponent;
  let fixture: ComponentFixture<HrmsSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmsSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmsSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
