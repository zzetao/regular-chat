import Regular from 'regularjs'

import tpl from './index.html';

// components
import LayoutInput from './layout-input.js';
import ChatPerson from './chat-person.js';

export default Regular.extend({
	name: 'index',
	data: {
		screenHeight: 0
	},
	template: tpl,
	config (data) {
		// get height
		
		this.data.screenHeight = document.body.scrollHeight;
	}
})