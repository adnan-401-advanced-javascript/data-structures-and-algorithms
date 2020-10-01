class KNode {
/**
 * [KNode]
 * @class KNode
 * @param  {*}    [value=null]
 */
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }
}

module.exports = KNode;
