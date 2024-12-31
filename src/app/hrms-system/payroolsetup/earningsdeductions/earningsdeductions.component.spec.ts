import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsdeductionsComponent } from './earningsdeductions.component';

describe('EarningsdeductionsComponent', () => {
  let component: EarningsdeductionsComponent;
  let fixture: ComponentFixture<EarningsdeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarningsdeductionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsdeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
