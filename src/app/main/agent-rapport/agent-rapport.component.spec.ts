import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRapportComponent } from './agent-rapport.component';

describe('AgentRapportComponent', () => {
  let component: AgentRapportComponent;
  let fixture: ComponentFixture<AgentRapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentRapportComponent]
    });
    fixture = TestBed.createComponent(AgentRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
