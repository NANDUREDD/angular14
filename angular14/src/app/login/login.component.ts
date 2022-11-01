import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private respData : any ;

  constructor(private _user: UserService,
              private route : Router) { }

  ngOnInit(): void {
  }

  authenticateUser(inputdata: any) {
    this.route.navigate(['home']);
    if (inputdata.valid) {
      this._user.authenticateUser(inputdata).subscribe(data => this.respData = data);
    }
  }

  registerUser(){
    this.route.navigate(['access/register']);
  }
}
