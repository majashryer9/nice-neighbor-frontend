import { Component, OnInit } from '@angular/core';

interface Page {
  title: string;
  href: string;
  active: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  pages: Page[] = [
    {
      title: 'Home',
      href: '/',
      active: true
    },
    {
      title: 'Become a Nice Neighbor',
      href: '/register-nice-neighbor',
      active: false
    },
    {
      title: 'Services',
      href: '/nice-neighbor-services',
      active: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  setActiveLink(title: string) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].active = title === this.pages[i].title;
    }
  }
}
