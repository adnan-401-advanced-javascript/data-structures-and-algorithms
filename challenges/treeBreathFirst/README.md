## Tree
a tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

## Challenge
to implement BinaryTree **BreathFirst**

## Approach & Efficiency
Big(o) is o(n) and O(n) cuz of using queue as a helper

## WhiteBoard
<img src="../../assets/cc-16.jpg" />

## API

## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
<dt><a href="#BinaryTree">BinaryTree</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#breadthFirst">breadthFirst()</a> ⇒ <code>array</code></dt>
<dd><p>[breadthFirst]</p>
</dd>
</dl>

<a name="Node"></a>

## Node
**Kind**: global class  
<a name="new_Node_new"></a>

### new Node(value, left, right)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| left | [<code>Node</code>](#Node) | <code></code> | default |
| right | [<code>Node</code>](#Node) | <code></code> | default |

<a name="BinaryTree"></a>

## BinaryTree
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| root | [<code>Node</code>](#Node) |

<a name="breadthFirst"></a>

## breadthFirst() ⇒ <code>array</code>
[breadthFirst]

**Kind**: global function  
**Returns**: <code>array</code> - array of breadthFirst  
