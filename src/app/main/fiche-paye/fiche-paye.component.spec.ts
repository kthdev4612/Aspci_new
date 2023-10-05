import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePayeComponent } from './fiche-paye.component';

describe('FichePayeComponent', () => {
  let component: FichePayeComponent;
  let fixture: ComponentFixture<FichePayeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichePayeComponent]
    });
    fixture = TestBed.createComponent(FichePayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
