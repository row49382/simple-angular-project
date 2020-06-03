import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequest: number = 1

  // Output: going to be sending data outside of this componenent
  @Output()
  pageChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setPageRequest(pageRequest: number): void {
    this.pageRequest = pageRequest;
    console.log("pageRequested value changed to " + pageRequest);
    this.pageChangedEvent.emit(pageRequest);
  }
}
