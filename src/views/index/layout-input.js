import Regular from 'regularjs';

import tpl from './layout-input.html';

export default Regular.extend({
	data: {
		name: null
	},
	name: 'layout-input',
	template: tpl,
	startHandler: function(name){
		console.log('[name]: ',name)
		this.$root.$state.go('app.chat')
	}
})