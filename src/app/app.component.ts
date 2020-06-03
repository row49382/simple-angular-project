import { Component, ViewChild, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'simple-angular-app';

  startTime: string;

  @ViewChild('footer', { static: true })
  footerComponent: FooterComponent;

  @ViewChild('page2', { static: true })
  page2Component: Page2Component;

  updateLastAccessed(): void {
    console.log(`the value was ${this.footerComponent.lastAccessed}`);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
    console.log('start time is ' + this.startTime);
  }

  incrementHitCounter(pageNumber: number): void {
    if (pageNumber === 2) {
      this.page2Component.incrementHitCounter();
    }
  }
}
