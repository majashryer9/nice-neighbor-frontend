import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  componentToShow: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.determineComponentToShow();
  }

  determineComponentToShow(): void {
    this.route.paramMap.pipe(first()).subscribe(params => {
      this.componentToShow = params.get('type');
    });
  }
}
