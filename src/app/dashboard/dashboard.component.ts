import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebarExpanded = true;
  name:any ="Satish86";
stockList:any=
[{
  name:"HDFC BANK",
  cost:"₹14,64,100.00",
  daily:"3,849.88",
  dailyChange:"-11.80%",
  total:"-1,95,900.00"

}]
  constructor() { }

  ngOnInit(): void {
  }

}
