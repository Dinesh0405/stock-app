import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
name: any="Satish86";
pass:any ="Kadam21@"
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    debugger
    if(this.name === "Satish86" && this.pass == "Kadam21@" ){
    this.route.navigate(['dashboard']);

  }
  }

}
