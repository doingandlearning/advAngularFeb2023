import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class GiftService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('Created GiftService');
  }

  getGifts(): Array<string> {
    var gifts: Array<string> = ['Climbing shoes', 'Bugatti Divo', 'Socks'];
    return gifts;
  }
}
