import Ember from 'ember';

export default Ember.Controller.extend({
	nome:'',
	divisao:'',
	actions: {
		search:function(){
			this.send('searchOnRoute', this.get('nome'), this.get('divisao'));
		}
	}
});
