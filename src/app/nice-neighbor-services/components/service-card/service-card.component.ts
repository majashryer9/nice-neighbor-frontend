import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() serviceTitle: string;
  @Input() serviceDescription: string;
  @Input() pageToRouteToUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
