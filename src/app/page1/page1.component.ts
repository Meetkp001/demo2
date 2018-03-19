import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: `<h1> in page1 component</h1>
             <button (click)="onclicked()">On Alert</button>
             <ng-content></ng-content>
             `
})
export class Page1Component implements OnInit {

  @Output() clicked=new EventEmitter<string>();

  onclicked()
  {
     this.clicked.emit("hello i am clicked");
  }
  constructor() { }

  ngOnInit() {
  }

}
