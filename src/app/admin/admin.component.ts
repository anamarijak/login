import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
  }

}
