import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviseurComponent } from './superviseur.component';

describe('SuperviseurComponent', () => {
  let component: SuperviseurComponent;
  let fixture: ComponentFixture<SuperviseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperviseurComponent]
    });
    fixture = TestBed.createComponent(SuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
