```javascript
// Incorrect use of $in operator with an array of arrays
db.collection.find({ field: { $in: [[1, 2], [3, 4]] } });
```