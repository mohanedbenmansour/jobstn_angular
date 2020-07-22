import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSettingsComponent } from './applicant-settings.component';

describe('ApplicantSettingsComponent', () => {
  let component: ApplicantSettingsComponent;
  let fixture: ComponentFixture<ApplicantSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
