import Ember from 'ember';

export default Ember.Controller.extend({
  isAsking: false,
actions: {
  new_question: function() {
    this.set('isAsking', true);
  },
  post: function() {
    this.set('isAsking', false);
    var newQ = this.store.createRecord('question', {
      question: this.get('new_question'),
    });
    newQ.save();
  }
}

});
