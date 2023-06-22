import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selctionBoxLeft: string = '0px';
  iconsSrcLinks: string[] = [
    '../../assets/icons/home.svg',
    '../../assets/icons/magnifying_glass.svg',
    '../../assets/icons/bell.svg',
    '../../assets/icons/map_marker.svg',
  ];

  iconClicked(index: number) {
    switch (index) {
      case 0:
        this.selctionBoxLeft = '0px';
        break;
      case 1:
        this.selctionBoxLeft = 366 / 4 + 'px';
        break;
      case 2:
        this.selctionBoxLeft = (366 / 4) * 2 + 'px';
        break;
      case 3:
        this.selctionBoxLeft = (366 / 4) * 3 + 'px';
        break;
    }
  }
}
