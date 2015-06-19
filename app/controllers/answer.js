import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  editAnswer: function() {
  	this.set('isEditingAnswer', true);
  },
  saveAnswer: function() {
  	this.set('isEditingAnswer', false);
  },
  delete: function() {
  	if (confirm('Are you sure?')) {
  		this.get('model').destroyRecord();
  		this.transitionToRoute('answers')

  			}
  		}
  	}
});
