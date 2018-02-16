import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueCarrouselComponent } from './vue-carrousel.component';

describe('VueCarrouselComponent', () => {
  let component: VueCarrouselComponent;
  let fixture: ComponentFixture<VueCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
