import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading-balance',
  templateUrl: './trading-balance.component.html',
  styleUrls: ['./trading-balance.component.css']
})
export class TradingBalanceComponent implements OnInit {
  sidebarExpanded = true;
  constructor() { }

  ngOnInit(): void {
  }

}
