import DS from 'ember-data';

export default DS.Model.extend({
    question: DS.attr(),
    answer: DS.hasMany('answer', {async:true})
});
