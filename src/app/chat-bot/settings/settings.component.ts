import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChatbotService } from '../chatbot.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  webhook: string = '';
  webSecret: string = '';

  constructor( public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public chatBotService: ChatbotService ) {
      let settings = this.chatBotService.getSettings();
      this.webhook = settings.hook;
      this.webSecret = settings.websecret;
    }

  ngOnInit(): void {
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  getCheck() {
    let inputValue = (<HTMLInputElement>document.getElementById('checkbox')).checked;
    let inputURL = <HTMLInputElement>document.getElementById('webhook-url');
    if(inputValue === true) {
      this.chatBotService.setSettings(this.webhook, this.webSecret);
    } else {
      this.chatBotService.setSettings('', '');
    }
  }

}
