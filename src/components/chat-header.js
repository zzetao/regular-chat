import Regular from 'regularjs';

import tpl from './chat-header.html';
import store from 'store';

let avatar_url = require('../assets/avatar/mark.png');

export default Regular.extend({
	name: 'chat-header',
	template: tpl,
	data: {
		nickname: null,
		avatar_url
	},
	init() {
		this.data.nickname = store.get('nickname');
	}
})