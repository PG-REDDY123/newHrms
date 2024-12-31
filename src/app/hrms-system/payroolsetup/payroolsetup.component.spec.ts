import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayroolsetupComponent } from './payroolsetup.component';

describe('PayroolsetupComponent', () => {
  let component: PayroolsetupComponent;
  let fixture: ComponentFixture<PayroolsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayroolsetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayroolsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
