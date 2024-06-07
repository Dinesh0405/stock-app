import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pledge-request',
  templateUrl: './pledge-request.component.html',
  styleUrls: ['./pledge-request.component.css']
})
export class PledgeRequestComponent implements OnInit {
  sidebarExpanded = true;
  constructor() { }

  ngOnInit(): void {
  }

}
