/*
    트리 예시
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
        this.PreOrderResult = [];
        this.InOrderResult = [];
        this.PostOrderResult = [];
    }
  
    PreOrder(node) {
        if (!node) {
            return;
        } else {
            this.PreOrderResult.push(node.val);
            this.PreOrder(node.left);
            this.PreOrder(node.right);

            return this.PreOrderResult;
        }
    }
  
    InOrder(node) {
        if (!node) {
            
            return;
        } else {
            this.InOrder(node.left);
            this.InOrderResult.push(node.val);
            this.InOrder(node.right);

            return this.InOrderResult;
        }
    }
  
    PostOrder(node) {
        if (!node) {
            return;
        } else {
            this.PostOrder(node.left);
            this.PostOrder(node.right);
            this.PostOrderResult.push(node.val);

            return this.PostOrderResult;
        }
    }
}

const MyTree = new Tree(new Node(1));
MyTree.root.left = new Node(2);
MyTree.root.right = new Node(3);
MyTree.root.left.left = new Node(4);
MyTree.root.left.right = new Node(5);
MyTree.root.right.left = new Node(6);
MyTree.root.right.right = new Node(7);

console.log("전위 순회 결과값 :", MyTree.PreOrder(MyTree.root));
console.log("중위 순회 결과값 :", MyTree.InOrder(MyTree.root));
console.log("후위 순회 결과값 :", MyTree.PostOrder(MyTree.root));