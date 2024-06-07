import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  sidebarExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
