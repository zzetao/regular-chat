import Regular from 'regularjs';

import tpl from './chat.html';

// components
import ChatHeader from './../../components/chat-header.js';
import ContactList from './../../components/contact-list.js';
import MessageList from './../../components/message-list.js';
import MessageReply from './../../components/message-reply.js';

export default Regular.extend({
	name: 'chat-view',
	template: tpl,
	data: {
		session: null
	},
})