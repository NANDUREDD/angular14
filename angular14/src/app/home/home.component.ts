import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public HomeText: string = "Home Works";

  constructor() { }

  ngOnInit(): void {
  }

  findLetter(word: string): void {
    let number = word.indexOf('k');
    console.log(number);
  }

}
