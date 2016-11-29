import Regular from 'regularjs';

import tpl from './chat-person.html';

export default Regular.extend({
	name: 'chat-person',
	template: tpl,
	data: {
		person: [
			{
				name: 'Nicky',
				intro: 'Nicky Byrne',
				avatar_url: require('../../assets/avatar/nicky.png')
			},
			{
				name: 'Bryan',
				intro: 'Bryan McFadden',
				avatar_url: require('../../assets/avatar/bryan.png')
			},
			{
				name: 'Shane',
				intro: 'Shane Steven Filan',
				avatar_url: require('../../assets/avatar/shane.png')
			},
			{
				name: 'Kian',
				intro: 'Kian John Francis Egan',
				avatar_url: require('../../assets/avatar/kian.png')
			},
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar/mark.png')
			}
		]
	},
	init() {
		setTimeout(() => {
			let chatBtn = document.querySelectorAll('.chat-btn');
			for(let btn of chatBtn) {
				btn.onclick = () => nameInput.focus();
			}
		},0)
	},
})