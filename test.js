const pluckAndGroup = require('./index');
const arrayOfObjects = [{apple:1, ball:2, cat:3, dog: "hi"}, {apple:4, ball:5, cat:6, dog: "bye"}];
const toPluckKeys = ['apple','ball'];
const groupByTheseKeysIndividually = ['apple', 'ball'];
const groupByCombinningTheseKeys = ['cat','dog']; 

console.log(JSON.stringify(pluckAndGroup.pluckAndGroup(arrayOfObjects, toPluckKeys, groupByTheseKeysIndividually, groupByCombinningTheseKeys)));
