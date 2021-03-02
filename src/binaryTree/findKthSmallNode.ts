import TreeNode from './ds'
let rank = 0
let res = -1

// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）

function kthSmallest(root: TreeNode | null, k: number): number {
  help(root, k)

  return res
}


function help(root: TreeNode | null, k: number){
  if (root === null){
    return
  }

  help(root.left, k)
  rank++
  if (rank === k){
    res = root.val

    return
  }
  help(root.right, k)

}