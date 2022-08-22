import { Injectable } from '@angular/core';


export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
  constructor() { }

  dialogue = new 
}
