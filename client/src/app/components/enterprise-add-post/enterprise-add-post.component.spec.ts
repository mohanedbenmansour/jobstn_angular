import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseAddPostComponent } from './enterprise-add-post.component';

describe('EnterpriseAddPostComponent', () => {
  let component: EnterpriseAddPostComponent;
  let fixture: ComponentFixture<EnterpriseAddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseAddPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
