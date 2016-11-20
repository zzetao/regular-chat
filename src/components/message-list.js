import Regular from 'regularjs';

import tpl from './message-list.html';

let avatar = require('./../assets/avatar.png');

export default Regular.extend({
	name: 'message-list',
	template: tpl,
	data: {
		avatar_url: avatar
	},
	scrollBottom (){
		let { messageList } = this.$refs;
		setTimeout(() => {
			// 渲染可能需要时间，所以做了延迟
			messageList.scrollTop = messageList.scrollHeight;
		},100)
	},
	config (data){
		// 有新的消息自动滚到底部
		this.$watch('session.messages', (newValue, oldValue) => {
			this.scrollBottom();
		})
	},
	init (){
		this.scrollBottom();
	}
})