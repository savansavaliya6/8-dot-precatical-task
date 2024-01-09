import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title ="Everything you crave, delivered."
  subtitle ="Get a pizza or a curry deliverd, or pick  up some chicken crow mein from the chinese takeout spot you've  been meaing to try."
  img ="../../assets/section-2.png"
  constructor( public router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
    
      window.scrollTo(0, 0)
  });
  }

}
