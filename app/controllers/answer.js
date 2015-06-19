import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  editAnswer: function() {
  	this.set('isEditingAnswer', true);
  },
  saveAnswer: function() {
    var answer = this.get('model');
    answer.set('answer', this.get('answer'));
    answer.save();
    this.setProperties({
      answer: ''
    })
    this.set('isEditing', false);
    this.transitionToRoute('answers')
  },
  delete: function() {
  	if (confirm('Are you sure?')) {
  		this.get('model').destroyRecord();
  		this.transitionToRoute('answers')

  			}
  		}
  	}
});
