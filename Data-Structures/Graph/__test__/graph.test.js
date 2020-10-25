/* eslint-disable no-undef */
const Graph = require("../Graph");
const Vertex = require("../Vertex");
const Edge = require("../Edge");

describe("create a new graph", () => {
  const graph = new Graph();

  const one = new Vertex(1);
  const two = new Vertex(2);
  const three = new Vertex(3);
  graph.addVertex(one);
  graph.addVertex(two);
  graph.addVertex(three);

  it("Node can be successfully added to the graph", () => {
    expect(graph.addVertex(one).value).toBe(1);
  });

  it("An edge can be successfully added to the graph()", () => {
    expect(graph.addEdge(one, two)).toBe(Edge);
  });

  it("All appropriate neighbors can be retrieved from the graph()", () => {
    const result = graph.getNeighbours(one);
    expect(result[0].vertex).toBe(two);
  });

  it("The proper size is returned, representing the number of nodes in the graph()", () => {
    expect(graph.getSize()).toEqual(3);
  });
});
