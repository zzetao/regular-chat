import Regular from 'regularjs';

import tpl from './layout-input.html';

import store from 'store';

export default Regular.extend({
	data: {
		name: null
	},
	name: 'layout-input',
	template: tpl,
	startHandler: function(name){
		console.log('[name]: ',name);
		
		let Name = (name || "").trim();
		if (Name) {
			store.set('nickname', Name);
			this.$root.$state.go('app.chat')
		}
	}
})