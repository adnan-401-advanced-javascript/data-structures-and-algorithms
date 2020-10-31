# Graph
A graph is a common data structure that consists of a finite set of nodes (or vertices) and a set of `edges` connecting them. A pair (x,y) is referred to as an edge, which communicates that the x `vertex` connects to the y `vertex`. In the examples below, circles represent vertices, while lines represent edges.

## Challenge
Implement a graph should be represented as an adjacency list.

## Approach & Efficiency
Definning a class for Vertex, a class for edges, and a class for the graph which uses Map()

## Big O
- Time **O(1)** for all methods
- Space
   - **O(n)** for addVertex
   - **O(1)** for other methods

# API

## Classes

<dl>
<dt><a href="#Edge">Edge</a></dt>
<dd></dd>
<dt><a href="#Graph">Graph</a></dt>
<dd></dd>
<dt><a href="#Vertex">Vertex</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#addVertex">addVertex(vertex)</a></dt>
<dd><p>[addVertex]</p>
</dd>
<dt><a href="#addEdge">addEdge(startVertex, endVertex, weight)</a></dt>
<dd><p>[addEdge description]</p>
</dd>
<dt><a href="#getNeighbours">getNeighbours(vertex)</a> ⇒ <code>array</code></dt>
<dd><p>[getNeighbours description]</p>
</dd>
<dt><a href="#getNodes">getNodes()</a> ⇒ <code>array</code></dt>
<dd><p>[getNodes]</p>
</dd>
<dt><a href="#getSize">getSize()</a> ⇒ <code>number</code></dt>
<dd><p>[getSize description]</p>
</dd>
</dl>

<a name="Edge"></a>

## Edge
**Kind**: global class  
<a name="new_Edge_new"></a>

### new Edge(vertex, n)

| Param | Type |
| --- | --- |
| vertex | <code>Node</code> |
| n | <code>Number</code> |

<a name="Graph"></a>

## Graph
**Kind**: global class  
<a name="Vertex"></a>

## Vertex
**Kind**: global class  
<a name="new_Vertex_new"></a>

### new Vertex(value)

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | [description] |

<a name="addVertex"></a>

## addVertex(vertex)
[addVertex]

**Kind**: global function  

| Param | Type |
| --- | --- |
| vertex | [<code>Vertex</code>](#Vertex) |

<a name="addEdge"></a>

## addEdge(startVertex, endVertex, weight)
[addEdge description]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startVertex | [<code>Vertex</code>](#Vertex) |  |
| endVertex | [<code>Vertex</code>](#Vertex) |  |
| weight | <code>number</code> | [description] |

<a name="getNeighbours"></a>

## getNeighbours(vertex) ⇒ <code>array</code>
[getNeighbours description]

**Kind**: global function  
**Returns**: <code>array</code> - array of vertex  

| Param | Type |
| --- | --- |
| vertex | [<code>Vertex</code>](#Vertex) |

<a name="getNodes"></a>

## getNodes() ⇒ <code>array</code>
[getNodes]

**Kind**: global function  
<a name="getSize"></a>

## getSize() ⇒ <code>number</code>
[getSize description]

**Kind**: global function

## BreadthFirst(startNode) ⇒ <code>vertex</code>

**Kind**: global function
