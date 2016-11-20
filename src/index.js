import Regular from 'regularjs';

import index from './views/index/index.js';
import chat from './views/chat/chat.js';

// directives
import Directives from './directives/index.js';
Directives(Regular);

// components
import Loading from './components/loading.js';

// style
import './styles/style.scss';

Regular.event('enter', function(element, fire){
  Regular.dom.on(element, 'keypress', function(ev){
  
    if(ev.which === 13) fire(ev)
  })
})

new Regular({
	template: `
		<chat-view />
	`
}).$inject('#app')