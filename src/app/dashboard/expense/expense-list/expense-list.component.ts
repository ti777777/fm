import { Component, Input, OnInit } from '@angular/core';
import { ExpenseModel } from '../../../models/expense-model';
import { ExpenseCategory } from '../../../enums/expense-category.enum';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.sass'],
})
export class ExpenseListComponent implements OnInit {
  public ExpenseList: ExpenseModel[];
  constructor() {}

  ngOnInit(): void {
    this.ExpenseList =  [
      {
        name: '早餐',
        price: 10,
        category: ExpenseCategory.Food,
        date: new Date(),
      },
      {
        name: '午餐',
        price: 10,
        category: ExpenseCategory.Food,
        date: new Date('2020-9-8'),
      },
      {
        name: '晚餐',
        price: 10,
        category: ExpenseCategory.Food,
        date: new Date('2020-9-8'),
      },
      {
        name: '點心',
        price: 10,
        category: ExpenseCategory.Food,
        date: new Date('2020-9-8'),
      },
    ];
  }
}
