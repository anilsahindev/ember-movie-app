import EmberRouter from '@ember/routing/router';
import config from 'movie-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('not-found', { path: '/*path' });
  this.route('search');
  this.route('movie', { path: 'movie/:movie_id'});
});
