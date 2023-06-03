import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITabs } from '../../interfaces/components-interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input('items') listTabs: ITabs[] = [];
  @Output() onClickTabs: EventEmitter<ITabs> = new EventEmitter<ITabs>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: string){    
    const findActive = this.listTabs.find(el => el.id === value);
    this.onClickTabs.emit(findActive);
  }

}
