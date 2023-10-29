import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSectionRapportComponent } from './agent-section-rapport.component';

describe('AgentSectionRapportComponent', () => {
  let component: AgentSectionRapportComponent;
  let fixture: ComponentFixture<AgentSectionRapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentSectionRapportComponent]
    });
    fixture = TestBed.createComponent(AgentSectionRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
