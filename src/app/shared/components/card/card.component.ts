import { Component, Input, OnInit } from '@angular/core';
import { ICardTitleValue, cardType } from '../../interfaces/components-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() backgroundColor = '#fff';
  @Input() class = '';
  @Input() type: cardType = 'default';
  @Input() isLoading = false;

  @Input() item: ICardTitleValue = {
    title: '',
    value: 0,
    type: 'general',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
