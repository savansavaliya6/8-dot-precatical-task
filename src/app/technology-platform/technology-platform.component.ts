import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-technology-platform',
  templateUrl: './technology-platform.component.html',
  styleUrls: ['./technology-platform.component.scss']
})
export class TechnologyPlatformComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
