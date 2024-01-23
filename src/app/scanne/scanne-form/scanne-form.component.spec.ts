import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanneFormComponent } from './scanne-form.component';

describe('ScanneFormComponent', () => {
  let component: ScanneFormComponent;
  let fixture: ComponentFixture<ScanneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanneFormComponent]
    });
    fixture = TestBed.createComponent(ScanneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
