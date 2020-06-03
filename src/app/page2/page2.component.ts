import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  pageName: string = 'page2';

  hitCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    alert(this.pageName);
  }

  incrementHitCounter(): void {
    this.hitCount += 1;
  }

}
