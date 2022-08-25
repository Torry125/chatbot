import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  firstName;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }

}
