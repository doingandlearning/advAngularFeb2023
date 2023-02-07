import { Component } from '@angular/core';
import { GiftService } from '../gift.service'
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css'],
  providers: [GiftService, LoggerService]
})
export class GiftListComponent {

  gifts: Array<string>; 

  constructor(giftService: GiftService, loggerService: LoggerService) { 
      this.gifts = giftService.getGifts();
      loggerService.log(`Created GiftListComponent, ${this.gifts.length} items`)
    }
}
