import Regular from 'regularjs';

import tpl from './message-reply.html';

import store from 'store';
import axios from 'axios';

export default Regular.extend({
	name: 'message-reply',
	template: tpl,
	data: {
		message: ''
	},
	saveDB (message){
		let { id } = this.data.session;
		let messages = store.get('messageDB') || {};
		let selfMessages = messages[id] || [];
		selfMessages.push(message)

		messages[id] = selfMessages;
		store.set('messageDB', messages);
	},
	autoReply (){
		// https://www.freejishu.com/archives/16
		axios.get('http://hitokoto.api.freejishu.com/v2/')
		.then((result) => {

			let newMessage = {
				position: 'left',
				time: '09:31 AM',
				content: result.data || 'random random random'
			};

			this.saveDB(newMessage);

			this.$emit('reply', newMessage);

		})
	},
	messageReply (message, event){
		message = (message || "").trim();
		if( !message ){
			return false;
		}
		event.preventDefault();
		let newMessage = {
			position: 'right',
			time: '09:30 AM',
			content: message
		};

		this.saveDB(newMessage);

		this.$emit('reply', newMessage);
		this.data.message = '';

		setTimeout(() => {
			this.autoReply();
		}, 1000)
	},
})