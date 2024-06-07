import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edis',
  templateUrl: './edis.component.html',
  styleUrls: ['./edis.component.css']
})
export class EdisComponent implements OnInit {
  sidebarExpanded = true;
  constructor() { }

  ngOnInit(): void {
  }

}
