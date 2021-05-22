import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-health-square',
  templateUrl: './health-square.component.html',
  styleUrls: ['./health-square.component.css']
})
export class HealthSquareComponent implements OnInit {

  @Input() message: string;
  @Input() isHealthy: boolean;
  @Input() applicationID: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/applications/' + this.applicationID]);
  }

}
