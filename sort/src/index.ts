import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([2, 4, 5, 8, 2, 3, 8, 3]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
