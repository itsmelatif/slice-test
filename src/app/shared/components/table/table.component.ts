import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() length: number = 0;
  @Input() columnLength: number = 0;
  @Input() isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
