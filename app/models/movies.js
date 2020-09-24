import Model, { attr } from '@ember-data/model';

export default class MoviesModel extends Model {
  @attr('string') title;
  @attr('string') posterPath;
  @attr('string') relaseDate;
  @attr('number') id;
  @attr('number') voteAverage;
}
