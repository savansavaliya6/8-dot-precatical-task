import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  title ="Find the perfect cuisine for you."
  subtitle ="Start swaping right for your test buds - you'|| soon find the cusise that's a pefect match your cravings."
  img = "../../assets/section-3.png"
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
