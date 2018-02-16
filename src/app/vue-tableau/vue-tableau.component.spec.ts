import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTableauComponent } from './vue-tableau.component';

describe('VueTableauComponent', () => {
  let component: VueTableauComponent;
  let fixture: ComponentFixture<VueTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
