import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-page',
  template: `<h1> In Page Component</h1>
              my Name is={{x}}
             <ng-content></ng-content>`
})
export class PageComponent implements OnInit {


  @Input() x:any=67;

  

  constructor() { }

  ngOnInit() {
  }

}
