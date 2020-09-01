import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  widgetbarOpen = false;
  widgets_bar_class="widgets-bar";

  constructor() {}

  ngOnInit(): void {}

  sideBarToggler() {
    this.widgetbarOpen = !this.widgetbarOpen;
    // this.widgets_bar_class
  }
}
