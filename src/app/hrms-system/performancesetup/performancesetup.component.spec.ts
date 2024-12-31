import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancesetupComponent } from './performancesetup.component';

describe('PerformancesetupComponent', () => {
  let component: PerformancesetupComponent;
  let fixture: ComponentFixture<PerformancesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancesetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
