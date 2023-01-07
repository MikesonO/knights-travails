<div align=center>
  <h1>Project: Knights Travails</h1>
</div>

### Summary
Find the shortest path between two positions on a standard 8x8 chess board by outputting all squares the knight will stop on along the way.

### Method
The function `knightMoves()`, accepts two values (start location and end location) and will return the shortest path possble from start to end and the number of moves.

For example: 
``` javascript
knightMoves([3, 3], [4, 3]);
```
Output:
```
=> You made it in 2 moves!  Here's your path:
[ 4, 5 ]
[ 3, 3 ]
[ 2, 1 ]

```
