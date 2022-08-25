import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from './chat-bot/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private dialogRef : MatDialog ) {}

  onOpenDialog(){
    this.dialogRef.open(SettingsComponent,{
      data : {
        name : 'Viktoriia'
      }
    });
  }
}
