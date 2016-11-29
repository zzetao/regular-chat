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
				time: this.getNow(),
				content: result.data || 'random random random'
			};

			this.saveDB(newMessage);

			this.$emit('reply', newMessage);

		})
	},
	getNow() {
		let now = new Date();
		function getNumber(num){
			let temp = parseInt(num) || 0;
			return (temp < 10 ? '0' : '' ) + num;
		}
		function getAmPm(){
			return now.getHours() < 12 ? "AM" : "PM";
		}
		return `${getNumber(now.getHours())}:${getNumber(now.getMinutes())} ${getAmPm()}`;
	},
	messageReply (message, event){
		message = (message || "").trim();
		if( !message ){
			return false;
		}
		event.preventDefault();

		let newMessage = {
			position: 'right',
			time: this.getNow(),
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