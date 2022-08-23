import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatbotService } from './chatbot.service';

@NgModule({
  declarations: [
    ChatComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatbotService],
  exports: [
    ChatComponent,
    SettingsComponent    
  ]
})
export class ChatBotModule { }
