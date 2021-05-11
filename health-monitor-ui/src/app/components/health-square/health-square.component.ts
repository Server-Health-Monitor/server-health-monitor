import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-health-square',
  templateUrl: './health-square.component.html',
  styleUrls: ['./health-square.component.css']
})
export class HealthSquareComponent implements OnInit {

  @Input() message: string;
  @Input() isHealthy: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
