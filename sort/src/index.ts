import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([2, 4, 5, 8, 2, 3, 8, 3]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('sdsafcsa');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(232);
linkedList.add(21432);
linkedList.sort();
linkedList.print();




