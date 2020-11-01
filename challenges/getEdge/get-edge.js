/* eslint-disable no-loop-func */

function getEdge(graph, cityArray) {
  const directedEdges = [];

  for (let i = 0; i < cityArray.length - 1; i += 1) {
    const neighbors = (graph.list.get(cityArray[i]));
    const [directEdge] = neighbors.filter((edge) => edge.vertex === cityArray[i + 1]);
    if (directEdge) directedEdges.push(directEdge);
    else return { connected: false, cost: "$0" };
  }
  return { connected: true, cost: `$${directedEdges.reduce((a, b) => a + b.weight, 0)}` };
}

module.exports = getEdge;
