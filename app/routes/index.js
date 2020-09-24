import Route from '@ember/routing/route';
import config from 'movie-app/config/environment';


export default class IndexRoute extends Route {
    model() {
        return fetch(config.APIS.POPULAR_MOVİES)
            .then(response => {
                return response.json()
            })
    }
}
