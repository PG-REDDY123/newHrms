import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSetupComponent } from './my-profile-setup.component';

describe('MyProfileSetupComponent', () => {
  let component: MyProfileSetupComponent;
  let fixture: ComponentFixture<MyProfileSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyProfileSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
