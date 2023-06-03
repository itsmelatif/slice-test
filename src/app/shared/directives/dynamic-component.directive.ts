import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {

  constructor(
    public _viewContainerRef: ViewContainerRef
  ) { 
  }

}
