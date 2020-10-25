class Edge {
  /**
   * @class Edge
   * @param  {Node}    vertex
   * @param  {Number}    n
   */
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
