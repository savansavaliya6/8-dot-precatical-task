import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
copyright ="2022 GoGrubz Ltd. All Rights Reserved."
img ='../../assets/logo.png'
  constructor() { }

  ngOnInit(): void {
  }

}
