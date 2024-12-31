import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuritmentsetupComponent } from './recuritmentsetup.component';

describe('RecuritmentsetupComponent', () => {
  let component: RecuritmentsetupComponent;
  let fixture: ComponentFixture<RecuritmentsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuritmentsetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuritmentsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
