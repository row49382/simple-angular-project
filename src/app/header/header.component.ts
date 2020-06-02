import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequest: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  setPageRequest(pageRequest: number): void {
    this.pageRequest = pageRequest;
    console.log("pageRequested value changed to " + pageRequest);
  }

}
