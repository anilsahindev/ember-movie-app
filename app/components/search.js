import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import config from 'movie-app/config/environment';

export default class SearchComponent extends Component {
    @tracked movies = [];
    @tracked value;
    page = 1;

    constructor() {
        super(...arguments);
    }
    @action
    getValue(e) {
        this.value = e.target.value;
    }

    @action
    searchMovie(e) {
        e.preventDefault();
        if (!this.value) return;
        fetch(config.APIS.SEARCH_MOVIES + `&query=${this.value}`)
            .then(response => {
                response.json().then(data => this.movies = data.results)
            });
        this.value = '';
    }
}