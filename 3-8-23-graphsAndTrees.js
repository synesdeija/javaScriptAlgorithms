//this is a leetCode problem. : https://leetcode.com/problems/maximum-depth-of-binary-tree/

//also paste this into a new yeetCode js doc and make sure to push ;) date is: 3.10.23

//MAXIMUM DEPTH OF BINARY TREE

// [[ DEPTH-FIRST SEARCH : Andrew says this will be something we learn today with this problem! ]]

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
};


//------------------our solution--------------------------------
//movie theater problem. you cannot see your row, so you have to ask people. but whoever you asks, can only see the row in front of them. so front row has ZERO (0), BC IT IS THE ROOT! the solution ends up 'off by 1', so we're returning the deepest of the left tree nodes, the deepest of the right tree nodes, then we total it all and add 1 for the 'offby1' (this is due to the front row returning that ZERO. It still MUST COUNT AS A NODE! THAT'S WHY THE + 1). This is RECURSIVE. So we know it's long af due to binary trees being 2-sided...so that's why were doing Math.max...whichn side is bigger? that's the side we wanna stick with for this depth-first search. 
//this is a very basic, recursive introduction solution! optimzing on Monday.

const maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}