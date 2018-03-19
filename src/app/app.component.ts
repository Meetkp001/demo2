import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';
import {PageComponent} from '../app/page/page.component';
import {Page1Component}from '../app/page1/page1.component';
import {TwowaybindingComponent}from '../app/twowaybinding/twowaybinding.component'

@Component({
  selector: 'app-root',
  template: `<h1> in App component</h1>
              <b>String interpolation={{title}}</b>
             <hr>
             <div [ngClass]="{directive_border: oncheck()}">
             <app-page [x]="25">
              <h2>now proparty binding</h2>
              Default value=<input type="text" [value]=title>
              <br>
              <p [ngStyle]="{color:'green'}">IS ngStyle directive</p>
             </app-page>
             </div>
             <hr>
             <div [ngClass]="{page1_style:true}">
             <app-page1 (clicked)="onalert($event)">
               <h1> Event binding</h1>
             </app-page1>
             </div>
             <div>
             <app-twowaybinding></app-twowaybinding>
             </div>`
             ,

    styles:[`.directive_border{border: 1px solid red}.page1_style{border: 2px solid green}`]

  

})
export class AppComponent {
  title = 'app';

  oncheck()
  {
    return true;
  }
  onalert(value:any)
  {
    alert(value);
  }


}
