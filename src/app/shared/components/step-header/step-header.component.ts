import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss']
})
export class StepHeaderComponent implements OnInit {
  @Input() logo: string;

  constructor() { }

  ngOnInit() {
  }

}
