import { Component, Input, OnInit } from '@angular/core';

export type locationData = {
  name: string,
  temperature: number,
  details: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() location!: locationData;

  constructor() { }

  ngOnInit(): void {
  }

}
