/* eslint-disable no-undef */

const getEdge = require("../get-edge");
const Graph = require("../../../Data-Structures/Graph/Graph");
const Vertex = require("../../../Data-Structures/Graph/Vertex");

const graph = new Graph();

const pandora = new Vertex("pandora");
const arendelle = new Vertex("arendelle");
const metroville = new Vertex("metroville");
const monstroplolis = new Vertex("monstroplolis");
const naboo = new Vertex("naboo");
const narnia = new Vertex("narnia");
graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(metroville);
graph.addVertex(monstroplolis);
graph.addVertex(naboo);
graph.addVertex(narnia);

graph.addEdge(pandora, arendelle, 150);
graph.addEdge(pandora, metroville, 82);
graph.addEdge(arendelle, metroville, 99);
graph.addEdge(arendelle, monstroplolis, 42);
graph.addEdge(metroville, monstroplolis, 105);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(monstroplolis, naboo, 73);
graph.addEdge(naboo, narnia, 250);
graph.addEdge(metroville, narnia, 37);

describe("test getEdge", () => {
  it("test case1", () => {
    const result = getEdge(graph, [pandora, metroville]);
    expect(result.connected).toBe(true);
    expect(result.cost).toBe("$82");
  });
  it("test case2", () => {
    const result = getEdge(graph, [arendelle, monstroplolis, naboo]);
    expect(result.connected).toBe(true);
    expect(result.cost).toBe("$115");
  });

  it("test case3", () => {
    const result = getEdge(graph, [naboo, pandora]);
    expect(result.connected).toBe(false);
    expect(result.cost).toBe("$0");
  });

  it("test case4", () => {
    const result = getEdge(graph, [narnia, arendelle, naboo]);
    expect(result.connected).toBe(false);
    expect(result.cost).toBe("$0");
  });
});
