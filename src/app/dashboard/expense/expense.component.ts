import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.sass']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale:'zh-tw',
    dateClick:function(info){
      
      info.dayEl.style.backgroundColor = 'red';
    }
  };
}
