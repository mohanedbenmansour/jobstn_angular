import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPostsComponent } from './applicant-posts.component';

describe('ApplicantPostsComponent', () => {
  let component: ApplicantPostsComponent;
  let fixture: ComponentFixture<ApplicantPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
