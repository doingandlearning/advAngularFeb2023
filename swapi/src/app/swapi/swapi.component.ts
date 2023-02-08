import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css'],
})
export class SwapiComponent {
  public response: string = '';
  public firstResource: string = '';
  public secondResource: string = '';
  public secondId: string = '';

  constructor(private swapi: SwapiService) {}

  handleGetPlanets() {}

  handleGetStarships() {}

  handleGetByResource(resource: string) {}

  handleGetByResourceAndId(resource: string, id: string) {}
}
