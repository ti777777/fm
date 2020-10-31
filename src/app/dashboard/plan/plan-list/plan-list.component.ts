import { Plan } from '../../../models/plan';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.sass']
})
export class PlanListComponent implements OnInit {

  @Input() Plans: Plan[];
  constructor() { }

  ngOnInit(): void {
  }

}
