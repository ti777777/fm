import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { ExpenseListComponent } from './dashboard/home/expense-list/expense-list.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ExpenseAmountComponent } from './dashboard/home/expense-amount/expense-amount.component';
import { WelcomeBannerComponent } from './dashboard/home/welcome-banner/welcome-banner.component';
import { SearchbarComponent } from './dashboard/home/searchbar/searchbar.component';
import { BudgetComponent } from './dashboard/budget/budget.component';
import { ExpenseComponent } from './dashboard/expense/expense.component';
import { CategoryComponent } from './dashboard/home/category/category.component'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenseListComponent,
    SettingsComponent,
    ExpenseAmountComponent,
    WelcomeBannerComponent,
    SearchbarComponent,
    BudgetComponent,
    ExpenseComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
