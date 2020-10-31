import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPlanComponent } from './normal-plan.component';

describe('NormalPlanComponent', () => {
  let component: NormalPlanComponent;
  let fixture: ComponentFixture<NormalPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
