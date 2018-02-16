import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueClassiqueComponent } from './vue-classique.component';

describe('VueClassiqueComponent', () => {
  let component: VueClassiqueComponent;
  let fixture: ComponentFixture<VueClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueClassiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
