import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessagesService } from '../../services/chat-messages';
import { Chatmessage } from '../../models/chatmessage';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {
	

	listMessages: Chatmessage[];

  constructor(private cmService: ChatMessagesService) {
  }
  
  ionViewWillEnter() {
  	this.loadMessages();
  }

  onAddMessage(form: NgForm) {
  	this.cmService.addMessage(form.value.message);
  	form.reset();
  	this.loadMessages();
  	
  }

  private loadMessages() {
  	this.listMessages = this.cmService.getMessages();
  	
  }
}
