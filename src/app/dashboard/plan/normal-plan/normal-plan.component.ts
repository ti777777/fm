import { Plan } from '../../../models/plan';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-plan',
  templateUrl: './normal-plan.component.html',
  styleUrls: ['./normal-plan.component.sass']
})
export class NormalPlanComponent implements OnInit {

  @Input() plan: Plan;

  constructor() { }

  ngOnInit(): void {
  }

}
