## Tree
a tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

## Challenge
to implement BinaryTree stacksAndQueues **preOrder**, **inOrder**, **postOrder**
and also binary search

## UML
<img src="../../assets/cc-15.jpeg" />

## API


### Classes

<dl>
<dt><a href="#BinaryTree">BinaryTree</a></dt>
<dd></dd>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#preOrder">preOrder(node)</a> ⇒</dt>
<dd><p>[preOrder]</p>
</dd>
<dt><a href="#inOrder">inOrder(node)</a> ⇒</dt>
<dd><p>[inOrder]</p>
</dd>
<dt><a href="#postOrder">postOrder(node)</a> ⇒</dt>
<dd><p>[postOrder]</p>
</dd>
</dl>

<a name="BinaryTree"></a>

## BinaryTree
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| root | [<code>Node</code>](#Node) |

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

<a name="preOrder"></a>

## preOrder(node) ⇒
[preOrder]

**Kind**: global function  
**Returns**: [Node}  array of Nodes in preOrder  

| Param | Type |
| --- | --- |
| node | [<code>Node</code>](#Node) |

<a name="inOrder"></a>

## inOrder(node) ⇒
[inOrder]

**Kind**: global function  
**Returns**: [Node}  array of Nodes in inOrder  

| Param | Type |
| --- | --- |
| node | [<code>Node</code>](#Node) |

<a name="postOrder"></a>

## postOrder(node) ⇒
[postOrder]

**Kind**: global function  
**Returns**: [Node}  array of Nodes in postOrder  

| Param | Type |
| --- | --- |
| node | [<code>Node</code>](#Node) |
