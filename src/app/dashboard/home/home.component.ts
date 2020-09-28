import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale:'zh-tw',
    dateClick:function(info){
      info.dayEl.style.backgroundColor = 'red';
    }
  };

  ngOnInit(): void {
  }

}
