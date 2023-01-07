import Node from "./node.js";

export default function knightMoves([x, y], [a, b]) {
  let knight = [Node([x, y], [[x, y]])];
  let currentNode = knight.shift();

  while (currentNode.location[0] !== a || currentNode.location[1] !== b) {
    let moves = [
      [currentNode.location[0] + 2, currentNode.location[1] - 1],
      [currentNode.location[0] + 2, currentNode.location[1] + 1],
      [currentNode.location[0] - 2, currentNode.location[1] - 1],
      [currentNode.location[0] - 2, currentNode.location[1] + 1],
      [currentNode.location[0] + 1, currentNode.location[1] - 2],
      [currentNode.location[0] + 1, currentNode.location[1] + 2],
      [currentNode.location[0] - 1, currentNode.location[1] - 2],
      [currentNode.location[0] - 1, currentNode.location[1] + 2],
    ];
    moves.forEach((move) => {
      let node = Node(move, currentNode.path.concat([move]));
      if (node) {
        knight.push(node);
      }
    });
    currentNode = knight.shift();
  }
  console.log(
    `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
  );
  currentNode.path.forEach((location) => {
    console.log(location);
  });
}