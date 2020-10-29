const Edge = require("./Edge");
const Vertex = require("./Vertex");

class Graph {
  /**
   * @class Graph
   */
  constructor() {
    this.list = new Map();
  }

  /**
   * [addVertex]
   * @method addVertex
   * @param  {Vertex}  vertex
   */
  addVertex(vertex) {
    this.list.set(vertex, []);
    return vertex;
  }

  /**
   * [addEdge description]
   * @method addEdge
   * @param  {Vertex} startVertex
   * @param  {Vertex} endVertex
   * @param  {number} weight      [description]
   */
  addEdge(startVertex, endVertex, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      return "Vertex not found !!!";
    }
    const adjacencies = this.list.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
    return Edge;
  }

  /**
   * [getNeighbours description]
   * @method getNeighbours
   * @param  {Vertex}      vertex
   * @return {array}       array of vertex
   */
  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      return "vertex does not exist";
    }
    return this.list.get(vertex);
  }

  /**
   * [getNodes]
   * @method getNodes
   * @return {array}
   */
  getNodes() {
    return this.list.entries();
  }

  /**
   * [getSize description]
   * @method getSize
   * @return {number}
   */
  getSize() {
    return this.list.size;
  }

  static getAdjacencyList(verticesValues, adjacencyMatrix) {
    const g = new Graph();
    const vertices = verticesValues.map((value) => g.addVertex(new Vertex(value)));

    for (let i = 0; i < adjacencyMatrix.length; i += 1) {
      for (let j = 0; j < adjacencyMatrix[i].length; j += 1) {
        if (adjacencyMatrix[i][j]) {
          g.addEdge(vertices[i], vertices[j]);
        }
      }
    }
    return vertices.map((vertex) => g.getNeighbours(vertex).map((edge) => edge.vertex.value));
  }
}

const verticesValues = ["a", "b", "c", "d", "e"];

const results = Graph.getAdjacencyList(verticesValues, [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0],
]);

results.forEach((list, i) => {
  console.log(verticesValues[i], "| ->", list.join(" -> "));
});

module.exports = Graph;
