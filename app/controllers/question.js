import Ember from 'ember';

export default Ember.Controller.extend({
  isReplying: false,
  needs: ['question'],
  actions: {
    edit: function() {
    this.set('isEditing', true);
    },
    save: function() {
      var question = this.get('model');
      question.set('question', this.get('question'));
      question.save();
      this.setProperties({
        question: ''
      })
      this.set('isEditing', false);

    },
    reply: function() {
      this.set('isAnswering', true);
    },
    post: function() {
      this.set('isAnswering', false);
      var controller = this;
      var newA = this.store.createRecord('answer', {
        answer: this.get('answer'),
      });
      newA.save().then(function() {
        var question = controller.get('model');
        question.get('answers').pushObject(newA);
        question.save();
    });
    },
    delete: function() {
    	if (confirm('Are you sure?')) {
    		this.get('model').destroyRecord();
        this.transitionToRoute('questions')
    	}
    }
  }
});
