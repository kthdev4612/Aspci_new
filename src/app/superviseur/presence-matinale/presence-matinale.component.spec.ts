import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceMatinaleComponent } from './presence-matinale.component';

describe('PresenceMatinaleComponent', () => {
  let component: PresenceMatinaleComponent;
  let fixture: ComponentFixture<PresenceMatinaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceMatinaleComponent]
    });
    fixture = TestBed.createComponent(PresenceMatinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
