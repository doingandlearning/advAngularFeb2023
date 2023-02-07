import { Injectable } from '@angular/core';

export abstract class ConfigServiceBase {
  abstract getServer() : string;
  abstract getTimeout(): number;
}

@Injectable()
export class ConfigService1 implements ConfigServiceBase {
  getServer(): string { return '//server1'}
  getTimeout() : number { return 10 }
}

@Injectable()
export class ConfigService2 implements ConfigServiceBase {
  getServer(): string { return '//server2'}
  getTimeout() : number { return 20 }
}

@Injectable()
export class ConfigService3 implements ConfigServiceBase {
  getServer(): string { return '//server3'}
  getTimeout() : number { return 30 }
}

@Injectable()
export class ConfigService4 implements ConfigServiceBase {
  getServer(): string { return '//server4'}
  getTimeout() : number { return 40 }
}
