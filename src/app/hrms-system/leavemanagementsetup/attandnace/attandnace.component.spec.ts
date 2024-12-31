import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandnaceComponent } from './attandnace.component';

describe('AttandnaceComponent', () => {
  let component: AttandnaceComponent;
  let fixture: ComponentFixture<AttandnaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttandnaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttandnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
