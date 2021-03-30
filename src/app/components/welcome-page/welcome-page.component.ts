import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  imagePath="../assets/frontpagebackground1.jpg";
  imagePath2="../assets/frontpagebackground2.jpg";
  imagePath3="../assets/frontpagebackground3.jpg";
  imagePathLogo="../assets/profilephoto.png"

  constructor() { }

  ngOnInit(): void {
  }

}
