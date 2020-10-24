module.exports = (tree1, tree2) => {
  tree1.preOrder(tree1.root);
  tree2.preOrder(tree2.root);

  const BT1 = tree1.result;
  const BT2 = tree2.result;

  const results = [];

  for (let i = 0; i < BT2.length; i += 1) {
    if (BT1.includes(BT2[i])) {
      results.push(BT2[i]);
    }
  }
  return results;
};
