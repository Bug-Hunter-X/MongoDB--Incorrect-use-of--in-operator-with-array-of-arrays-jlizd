# MongoDB Incorrect $in operator Usage

This repository demonstrates an uncommon error in MongoDB queries related to the incorrect use of the `$in` operator when dealing with arrays of arrays.

## Problem
The `$in` operator is designed to check if a field's value exists within a given array.  However, providing an array of arrays to `$in` does not yield the intended result. It will attempt to match the entire sub-array as a single element, rather than matching individual elements within sub-arrays. This usually leads to a mismatch.

## Solution
The solution involves restructuring the query to use the `$elemMatch` operator if you need to perform a match based on multiple criteria within nested arrays. Alternatively, you can flatten the array before using the `$in` operator, depending on your needs.

## How to reproduce
1. Clone this repo
2. Start a MongoDB instance.
3. Run the script `bug.js`. Observe the results.
4. Then run `bugSolution.js`. Observe the corrected results.
