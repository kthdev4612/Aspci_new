import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionAgentComponent } from './list-section-agent.component';

describe('ListSectionAgentComponent', () => {
  let component: ListSectionAgentComponent;
  let fixture: ComponentFixture<ListSectionAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSectionAgentComponent]
    });
    fixture = TestBed.createComponent(ListSectionAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
