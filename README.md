# PluckNGroup

# To pluck and group data from an array of objects in javascript in a single loop (used to remove boilerplate codes)
  We can pluck any number of key, group the array using any number of keys or even group using multiple key combimations

# Sample inputs and outputs

1)Input
 const arrayOfObjects = [{apple:1, ball:2, cat:3, dog: "hi"}, {apple:4, ball:5, cat:6, dog: "bye"}];
 const toPluckKeys = ['apple','ball'];
 const groupByTheseKeysIndividually = ['apple', 'ball'];
 const groupByCombinningTheseKeys = ['cat','dog']; 

2)Function call
 pluckAndGroup(arrayOfObjects, toPluckKeys, groupByTheseKeysIndividually, groupByCombinningTheseKeys)));

3)Output
{
    "pluckedData":{"balls":["2","5"],"apples":["1","4"]},
    "groupedByData":{
        "ballgrp":{"2":{"apple":1,"ball":2,"cat":3,"dog":"hi"},"5":{"apple":4,"ball":5,"cat":6,"dog":"bye"}},
        "applegrp":{"1":{"apple":1,"ball":2,"cat":3,"dog":"hi"},"4":{"apple":4,"ball":5,"cat":6,"dog":"bye"}}
    },
    "gropedByMultiKeyData":{
        "cat_dogmultiGrp":{"6_bye":{"apple":4,"ball":5,"cat":6,"dog":"bye"},"3_hi":{"apple":1,"ball":2,"cat":3,"dog":"hi"}}
    }
}