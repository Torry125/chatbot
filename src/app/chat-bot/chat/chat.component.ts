import { Component, OnInit } from '@angular/core';
import { Lines, ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  
  lines: Lines[] = [];
  currentItem: string = '';

  constructor(public chatBotService: ChatbotService) { }

  ngOnInit() {
      this.chatBotService.dialog.subscribe((item) => {
      this.lines = this.lines.concat(item);
    });
  }

  send() {
    this.chatBotService.getAnswer(this.currentItem);
    this.currentItem = '';
  }
}
