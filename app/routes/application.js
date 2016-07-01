import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(template, model){
      var model = model || {};
      this.render(template, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },

    closeModal: function(){
    this.disconnectOutlet({
        parentView: 'application',
        outlet: 'modal'
      });
    }
  }
});
