'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'movie-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    APIS: {
      POPULAR_MOVİES: 'https://api.themoviedb.org/3/movie/popular?api_key=364bc4e024e160b4c5cee57739cf2ffc&language=en-US&page=1',
      SEARCH_MOVIES: 'https://api.themoviedb.org/3/search/movie?api_key=364bc4e024e160b4c5cee57739cf2ffc&language=en-US&page=1&include_adult=false'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
