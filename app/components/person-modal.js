import Ember from 'ember';

export default Ember.Component.extend({

  fadeIn: function(){
    this.$(".modal").hide().fadeIn();
  }.on('didInsertElement'),

  actions: {
    closeModal: function(){
    var self = this;
    this.$(".modal").fadeOut(500, function(){
      self.sendAction('close');
    });
    }
  }
});
