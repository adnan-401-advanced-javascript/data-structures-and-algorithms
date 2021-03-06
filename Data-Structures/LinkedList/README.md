# Singly Linked List
linked list is a data structure has just one pointer called **head**;

# Challenge
implement Singly Linked List in ES6 and test it

# UML

<img src = "../../assets/linkedlist-07.png" />


# API

## Classes

<dl>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd></dd>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#insert">insert(value)</a></dt>
<dd><p>[insert methd]</p>
</dd>
<dt><a href="#includes">includes(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if LinkedList includes this value</p>
</dd>
<dt><a href="#toString">toString()</a> ⇒ <code>String</code></dt>
<dd><p>[toString to print the linked list]</p>
</dd>
<dt><a href="#append">append(value)</a> ⇒ <code><a href="#LinkedList">LinkedList</a></code></dt>
<dd><p>[append -&gt; insert at the tail]</p>
</dd>
<dt><a href="#insertBefore">insertBefore(value, newValue)</a> ⇒ <code><a href="#LinkedList">LinkedList</a></code></dt>
<dd><p>[insertBefore]</p>
</dd>
<dt><a href="#insertAfter">insertAfter(value, newValue)</a> ⇒ <code><a href="#LinkedList">LinkedList</a></code></dt>
<dd><p>[insertAfter description]</p>
</dd>
<dt><a href="#kthFromEnd">kthFromEnd(k)</a> ⇒ <code>*</code></dt>
<dd><p>return the n-th element of the tail</p>
</dd>
</dl>

<a name="LinkedList"></a>

## LinkedList
**Kind**: global class  
**Properties**

| Name |
| --- |
| head |

<a name="Node"></a>

## Node
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| value | <code>\*</code> |
| [] | [<code>Node</code>](#Node) |

<a name="insert"></a>

## insert(value)
[insert methd]

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> |

<a name="includes"></a>

## includes(value) ⇒ <code>boolean</code>
check if LinkedList includes this value

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> |

<a name="toString"></a>

## toString() ⇒ <code>String</code>
[toString to print the linked list]

**Kind**: global function  
<a name="append"></a>

## append(value) ⇒ [<code>LinkedList</code>](#LinkedList)
[append -> insert at the tail]

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> |

<a name="insertBefore"></a>

## insertBefore(value, newValue) ⇒ [<code>LinkedList</code>](#LinkedList)
[insertBefore]

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> |
| newValue | <code>\*</code> |

<a name="insertAfter"></a>

## insertAfter(value, newValue) ⇒ [<code>LinkedList</code>](#LinkedList)
[insertAfter description]

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> |
| newValue | <code>\*</code> |

<a name="kthFromEnd"></a>

## kthFromEnd(k) ⇒ <code>\*</code>
return the n-th element of the tail

**Kind**: global function  

| Param | Type |
| --- | --- |
| k | <code>number</code> |
