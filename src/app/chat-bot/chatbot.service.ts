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
  
  $dialog = new Subject<Lines[]>();
  firstName = 'Viktoriia';
  lastName = 'Kramarova';
  
  dialogList = {
    "Hello": "Hello, " + this.firstName + ' ' + this.lastName + '.' + 'Thanks for applying at BOTfriends.',
    "How are you?": "I'm good " + this.firstName + "!", 
    "reserve": "Sorry, I don't understand"
  };

  getAnswer(message: string) {
    const client = new Lines('client', message);  
    this.$dialog.next([client]);
    const chatBot = new Lines('chatBot', this.getMessage(message));
    
    setTimeout(()=>{
      this.$dialog.next([chatBot]);
    }, 2000);
  }

  getMessage(question: string){
    let reply = (this.dialogList as any)[question];
    return reply || this.dialogList["reserve"];
  }

  setSettings(url: string, secret: string) {
    const webhooks = {
      hook: url,
      websecret: secret 
    }
    window.localStorage.setItem('webhook', JSON.stringify(webhooks));
  }

  getSettings() {
    return JSON.parse(localStorage.getItem('webhook') || '{}');
  }
}
