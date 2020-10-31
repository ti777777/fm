import { ExpenseCategory } from '../enums/expense-category.enum';
export class ExpenseModel {
  public price: number;
  public date: Date;
  public name: string;
  public category: ExpenseCategory;
}
