import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private id: number;
  private static nextId: number = 1;

  constructor(private name: string) {
    this.id = LoggerService.nextId++;
  }

  log(message: string): void {
    console.log(`[Logger ${this.id}] ${message}`);
  }
}
