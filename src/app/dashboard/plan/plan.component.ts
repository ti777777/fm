import { Plan } from './../../models/plan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass'],
})
export class PlanComponent implements OnInit {
  Plans: Plan[]=new Array<Plan>();
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const plan: Plan = {
        StartDate : new Date(),
        EndDate : new Date(),
        Name : '123',
        Target : 0
      };
      this.Plans.push(plan);

    }
  }
}
