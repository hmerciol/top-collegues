import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueHistoriqueComponent } from './vue-historique.component';

describe('VueHistoriqueComponent', () => {
  let component: VueHistoriqueComponent;
  let fixture: ComponentFixture<VueHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
