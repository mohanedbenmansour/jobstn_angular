import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseViewPostComponent } from './enterprise-view-post.component';

describe('EnterpriseViewPostComponent', () => {
  let component: EnterpriseViewPostComponent;
  let fixture: ComponentFixture<EnterpriseViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseViewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
