import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('store', function(){
    this.route('item', {path: '/:item_id'});
  });

});

export default Router;
