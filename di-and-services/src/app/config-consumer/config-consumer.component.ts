import { Component } from '@angular/core';
import {
  ConfigServiceBase,
  ConfigService1,
  ConfigService2,
  ConfigService3,
  ConfigService4,
} from '../config.service';

@Component({
  selector: 'app-config-consumer',
  templateUrl: './config-consumer.component.html',
  styleUrls: ['./config-consumer.component.css'],

  // Uncomment one of the following "providers" properties...
  // providers: [ConfigService1],
  // "useClass" provider:
  // providers: [{ provide: ConfigServiceBase, useClass: ConfigService1 }],

  /*
  // "useValue" provider:
  providers: [{ provide: ConfigServiceBase, useValue: new ConfigService2() }],
  */

  /*  
  // "useFactory" provider:
  */
  providers: [
    {
      provide: ConfigServiceBase,
      useFactory: (demo: boolean) =>
        demo ? new ConfigService3() : new ConfigService4(),
      deps: ['IS_USING_DEMO_DB'],
    },
  ],
})
export class ConfigConsumerComponent {
  server: string;
  timeout: number;

  constructor(private configService: ConfigServiceBase) {
    this.server = configService.getServer();
    this.timeout = configService.getTimeout();
  }
}
