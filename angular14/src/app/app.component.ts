import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'angular14';
  isNavbarVisible: boolean | undefined ;
  
  constructor(private route : Router){}

  ngDoCheck(){
    const currentRoute = this.route.url;
    const isNavbarVisible = currentRoute ==='/login' ? false : true; 
  } 
}
