import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return $.getJSON('http://itp-api.herokuapp.com/artists');
  }
});
