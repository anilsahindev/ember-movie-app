import Route from '@ember/routing/route';
import config from 'movie-app/config/environment';
import fetch from 'fetch';

export default class MovieRoute extends Route {
    model(params) {
        const {movie_id} = params;
        return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=364bc4e024e160b4c5cee57739cf2ffc&language=en-US`)
            .then(response => {
                return response.json()
        })
    }
}