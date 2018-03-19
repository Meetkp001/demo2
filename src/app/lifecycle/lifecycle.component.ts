import { Component,
   OnInit,
   OnChanges,
   OnDestroy,
   DoCheck,
   AfterContentChecked,
   AfterContentInit,
   AfterViewInit,
   AfterViewChecked,} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  ngOnChanges(){

    this.log("onchange");

  }

  ngOnInit() 
  {
    this.log("oninit");
  }
  ngDoCheck()
  {
    this.log("DoCheck");
  }
  ngAfterContentInit()
  {
     this.log("aftercontentinit");
  }
  ngAfterContentChecked()
  {
    this.log("AftercontentChecked");
  }
  ngAfterViewInit()
  {
    this.log("afterViewInit");
  }
  ngAfterViewChecked()
  {
    this.log("afterViewchecked");
  }
  ngOnDestroy()
  {
    this.log("destroy");
  }

  private log(hook:string)
  {
    console.log(hook);
  }

}
