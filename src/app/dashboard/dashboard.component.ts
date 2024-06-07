import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebarExpanded = true;
  name:any ="Satish86";



  constructor() { }

  ngOnInit(): void {
   
  }
 
    

  

   
 
  // events
  public chartClicked(e:any):void {

  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
