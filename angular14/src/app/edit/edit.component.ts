import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /*Activated Route :- Used to capture the route values can be used as dependency injection as it is a  service*/
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  /* Capturing the Id value and logging it in the console , this will be the usual 
     value that we obtain from the backend or webserver */
  // ParamMap provide get api where we can subscribe to the value and use it.
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
