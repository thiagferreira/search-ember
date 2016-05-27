import Ember from 'ember';

export default Ember.Controller.extend({
	nome:'',
	actions: {
		search:function(){
			this.send('searchOnRoute', this.get('nome'));
		}
	}
});
