import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.css'],
  providers: [LoggerService],
})
export class GiftItemComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  @Input()
  description!: string;

  ngOnInit() {
    this.loggerService.log(`Created GiftItemComponent, ${this.description}`);
  }
}
