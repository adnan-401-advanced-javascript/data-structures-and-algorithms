const Edge = require("./Edge");

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
}

module.exports = Graph;
