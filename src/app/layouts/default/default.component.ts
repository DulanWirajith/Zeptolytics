import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  widgetbarOpen = true;
  constructor() {}

  ngOnInit(): void {}

  sideBarToggler() {
    this.widgetbarOpen = !this.widgetbarOpen;
  }
}
