import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storeapp',
  templateUrl: './storeapp.component.html',
  styleUrls: ['./storeapp.component.scss']
})
export class StoreappComponent implements OnInit {
  title ="Download Our App"
  subtitle ="Our app give you access to your favorite  restaurants. Get your food delivered right to you"
  img = "../../assets/section-4.png"
  constructor() { }

  ngOnInit(): void {
  }

}
