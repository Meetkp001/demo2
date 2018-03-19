import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `<h1> your in two way data binding</h1>
            Name<input type="text" [(ngModel)]="person.name">
            Name:{{person.name}}
            <br>
            Age <input type="number" [(ngModel)]="person.age">
            Age={{person.age}}
            `,

          
})
export class TwowaybindingComponent implements OnInit {

person={
  name:"meet",
  age:"21"
}
  constructor() { }

  ngOnInit() {
  }

}
