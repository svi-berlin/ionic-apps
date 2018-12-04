import { Chatmessage } from '../models/chatmessage';

export class ChatMessagesService {

	private messages: Chatmessage[] = [];
    

	addMessage(message: string) {
		this.messages.push(new Chatmessage(message));
	}

	getMessages() {
		return this.messages.slice();	
	}
}