import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueDetailComponent } from './vue-detail.component';

describe('VueDetailComponent', () => {
  let component: VueDetailComponent;
  let fixture: ComponentFixture<VueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
