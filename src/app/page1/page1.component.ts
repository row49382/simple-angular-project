import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName: string = 'Page 1';

  constructor() { }

  // on initialization of the page, allows to setup state of component
  // requires the OnInit interface to be implemented
  ngOnInit(): void {
    setTimeout(() => this.pageName = 'First Page', 5000);
  }

  onButtonClick(): void {
    this.postAlert()
  }

  onHoverPara(): void {
    this.postAlert()
  }

  private postAlert(): void {
    alert('hello - the date today is ' + new Date());
  }
}
