import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Lines {
  constructor( public author: string, public main: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
  constructor() {
  }
  
  dialog = new Subject<Lines[]>();

  
  dialogList = {
    "Hello": "Hello",
    "reserve": "Sorry, I don't understand"
  };

  getAnswer(message: string) {
    const client = new Lines('client', message);  
    this.dialog.next([client]);
    const chatBot = new Lines('chatBot', this.getMessage(message));
    
    setTimeout(()=>{
      this.dialog.next([chatBot]);
    }, 2000);
  }

  getMessage(question: string){
    let reply = (this.dialogList as any)[question];
    return reply || this.dialogList["reserve"];
  }

  getWebhook(url: string, secret: string) {
    const webhooks = {
      webhook: url,
      websecret: secret 
    }

    window.localStorage.setItem('webhook', JSON.stringify(webhooks));
  }
}
