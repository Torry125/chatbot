import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    ChatComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatBotModule { }
