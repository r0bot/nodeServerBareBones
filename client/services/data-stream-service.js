import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import { getSampleData, getRandomInt } from '../mocks/data'; // TODO: remove

function connectToDataStream(streamId, sinceDate) {
  const ticker = Observable.interval(getRandomInt(50, 7000)).map(() => getSampleData(1, true));
  const initial = Observable.of(getSampleData(5));
  return Observable.merge(initial, ticker);
}

const dataStreamService = {
  connectToDataStream
};

export default dataStreamService;