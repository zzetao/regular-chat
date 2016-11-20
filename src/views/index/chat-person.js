import Regular from 'regularjs';

import tpl from './chat-person.html';

export default Regular.extend({
	name: 'chat-person',
	template: tpl,
	data: {
		person: [
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar.png')
			},
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar.png')
			},
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar.png')
			},
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar.png')
			},
			{
				name: 'Mark',
				intro: 'Markus Michael Patrick Feehily',
				avatar_url: require('../../assets/avatar.png')
			},
		]
	}
})