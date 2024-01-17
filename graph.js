class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let v of vertexArray){
      this.nodes.add(v)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  //doesn't pass test, but is DFS. 
  depthFirstSearch(start) {
    const seen = new Set();
    const traversal = [];
    const stack = [start];
    let currNode;
    
    while(stack.length > 0){
      currNode = stack.pop()
      
      if(!seen.has(currNode)) traversal.push(currNode.value)
      seen.add(currNode)

      for(let n of currNode.adjacent){
        if(!seen.has(n)) stack.push(n);
      }
      
    }
    console.log(traversal)
    return traversal;
  } 

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const seen = new Set();
    const traversal = [];
    const queue = [start];
    
    while(queue.length > 0){
      if(!seen.has(queue[0])) traversal.push(queue[0].value)
      seen.add(queue[0])

      for(let n of queue[0].adjacent){
        if(!seen.has(n)) queue.push(n);
      }

      queue.shift()
    }
    return traversal;
  }
}

module.exports = {Graph, Node}