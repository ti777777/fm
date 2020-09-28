import { Component, Input, OnInit } from '@angular/core';
import { ExpenseModel } from '../../../models/expense-model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.sass'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() Expense: any;
  constructor() {}

  ngOnInit(): void {}
}
