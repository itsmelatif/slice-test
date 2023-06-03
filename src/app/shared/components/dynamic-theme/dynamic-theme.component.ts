import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';

@Component({
  selector: 'app-dynamic-theme',
  templateUrl: './dynamic-theme.component.html',
  styleUrls: ['./dynamic-theme.component.scss']
})
export class DynamicThemeComponent implements OnInit {
  @ViewChild(DynamicComponentDirective, { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  @Input() componentType: any;
  
  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadDynamicComponent();
    });
  }

  loadDynamicComponent(){
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
      const component = this._componentFactoryResolver.resolveComponentFactory(
        this.componentType
      );
      const componentRef = this.viewContainerRef.createComponent(component);
    }
  }


}
