import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAmountComponent } from './expense-amount.component';

describe('ExpenseAmountComponent', () => {
  let component: ExpenseAmountComponent;
  let fixture: ComponentFixture<ExpenseAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
