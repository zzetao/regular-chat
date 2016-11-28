import Regular from 'regularjs';
import restate from 'restate';

import Layout from './views/layout/layout.js';
import Index from './views/index/index.js';
import Chat from './views/chat/chat.js';

// directives
import Directives from './directives/index.js';
Directives(Regular);

// components
import Loading from './components/loading.js';

// style
require('./styles/style.scss');

// event
Regular.event('enter', function(element, fire){
  Regular.dom.on(element, 'keypress', function(ev){
  
    if(ev.which === 13) fire(ev)
  })
})

let stateman = restate({
	view: document.getElementById('#app'),
	Component: Regular
})

// register routes
stateman
	.state("app", Layout, "")
	.state("app.index", Index, {
		url: "/"
	})
	.state("app.chat", Chat, {
		url: "/chat"
	})
	.on("notfound", () => {
		console.log('[Router]: not found')
		stateman.go('app.index')
	})
	.on("begin", (option) => {
		console.log('[Router]: ',option)
	})
	.start({
		html5: false,
		prefix: '!'
	})
