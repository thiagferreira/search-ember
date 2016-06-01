import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.peekAll('worker');
	},

	buscaPorNome: function(nome) {
		return new Ember.RSVP.Promise(function(resolve, reject){
			Ember.$.get('http://104.41.15.24/QuemQuem.Api/api/Worker?name=' + nome).then(function(results){
				console.log(results.Contato);
				resolve(results.Contato);
			},function(results){
				alert(results.responseText);
			});
		});
	},

	actions: {
		searchOnRoute: function(nome){
			var self = this;
			self .store.unloadAll('worker');
			self.buscaPorNome(nome).then(function(results){
				Ember.$.each(results, function(indice, item){
					var worker = {
						id: indice,
						type: 'worker',
						attributes: {
							nome: item.Nome,
							divisao: item.Divisao,
							email: item.Email,
							emailPessoal:  item.EmailPessoal,
							localFisico:  item.LocalFisico,
							ramal: item.Ramal,
							divModal: item.Nome.dasherize(),
							foto: item.Foto
						}
					};
					self.store.push({data: worker});
				});
			});
		}
	}
});
