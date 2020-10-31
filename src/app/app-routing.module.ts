import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ExpenseComponent } from './dashboard/expense/expense.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PlanComponent } from './dashboard/plan/plan.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'expense',
    component: ExpenseComponent,
  },
  {
    path: 'budget',
    component: ExpenseComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'plan' ,
    component: PlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
