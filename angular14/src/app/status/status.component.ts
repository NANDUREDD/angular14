import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h3>
      404 - PAGE NOT FOUND
    </h3>
  `,
  styles: [
    "h3 {color : red}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
