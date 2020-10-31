/* eslint-disable no-undef */

const Graph = require("../Graph");
const Vertex = require("../Vertex");

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

graph.addEdge(pandora, arendelle);
graph.addEdge(arendelle, metroville);
graph.addEdge(arendelle, monstroplolis);
graph.addEdge(metroville, monstroplolis);
graph.addEdge(metroville, naboo);
graph.addEdge(monstroplolis, naboo);
graph.addEdge(naboo, narnia);
graph.addEdge(metroville, narnia);

describe("test bfs", () => {
  it("test", () => {
    const results = [];
    graph.BreadthFirst(pandora).forEach((item) => results.push(item.value));
    expect(results).toStrictEqual(["pandora", "arendelle", "metroville", "monstroplolis", "naboo", "narnia"]);
  });
});
