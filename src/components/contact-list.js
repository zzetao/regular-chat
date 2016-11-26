import Regular from 'regularjs';

import tpl from './contact-list.html';

let avatar = require('./../assets/avatar/mark.png');

import axios from 'axios';
import store from 'store';

export default Regular.extend({
	name: 'contact-list',
	template: tpl,
	data: {
		contacts: [
		/*{
				name
				id,
				avatar_url,
				message,
				time,
				unread,
				messages		
			}
			*/
		],
		selectedContact: [],
		pageIndex: 1,
		isShowLoading: true,
		isLoadMore: false,
	},
	config (data){
		this.getContacts();
	},
	select (contact,index){
		this.data.selectedContact = [];
		this.data.selectedContact[index] = true;
		contact.unread = 0;
		contact['id'] = index; // 将 index 作为 id 使用
		let db = store.get('messageDB') || {};
		contact['messages'] = db[index] || [];
		this.$emit('selected', contact);
	},
	getContacts (){
		let page = this.data.pageIndex;
		this.data.isShowLoading = true;
		axios.get('https://api.randomuser.me',{
			params: {
				results: 20,
				page: page
			}
		})
		.then(res => {
			let { results } = res.data;
			let arr = [];

			for ( let r of results ) {
				arr.push({
					name: r.login.username,
					avatar_url: r.picture.medium,
					time: '09:30 AM',
					unread: Math.floor(Math.random()*10),
					message: `${r.location.city} ${r.location.state} ${r.location.street} ${r.location.postcode}`
				})		
			}

			this.data.pageIndex = page+1;
			this.data.contacts = this.data.contacts.concat(arr);
			this.data.isShowLoading = false;
			this.data.isLoadMore = false;
			this.$update()
		})
		.catch(err => {
			console.log('[error]: ',err)
		})
	},
	loadMore (event){
		let el = event.target;
		let windowHeight = window.innerHeight || document.documentElement.clientHeight;
		if ((el.scrollTop + windowHeight - 60) > el.scrollHeight - 200 && !this.data.isLoadMore) {
			this.data.isLoadMore = true;
			console.log('load more........', this.data.pageIndex);
			this.getContacts();
		}

	}
})