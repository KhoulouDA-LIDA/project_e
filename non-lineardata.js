//counting nodes in a binary tree
nodesinBinaryTreeiterative(TreeNode root)
{
    if (root==null){
        return 0;
    }
    else{
        queue<TreeNode> queue= new queue<TreeNode>();
        queue.Enqueue(root);
        int count =0;
        while(queue.count>0){
            TreeNode node= queue.Dequeue();
            count++;
            if(node.left != null){
                queue.Enqueue(node.left);
            }
            if(node.right != null){
                queue.Enqueue(node.right);
            } 
       }
    }return count;

}
//find height of a binary tree 
struct Node{
    int data ;
    struct Node *left;
    struct Node *right;
};
int FindHeight(struct Node *root){
    if(root == NULL)
    return -1;
    return max(FindHeight(root->left),FindHeight(root->right))+1;
}
//Find the number of leaf nodes in binary tree
int count=0;
count_leaves(node *root){
    if(root){
        if(root->left == NULL && root->right==NULL){
            count++;
        }
        if(root->left)
        count_leaves(root->left)
        if (root->right)
        count_leaves(root->right)
    }
}
// find min and max element in a binary search tree
struct BstNode{
    int data;
    BstNode*left;
    BstNode *right;
};
int FindMin(BstNode*root){
    if (root == NULL){
        cout<<"Error: tree is empty\n";
        return -1;
    }
    else if(root->left == NULL){
        return root->data;
    }
    //searcg in left subtree
    return FindMin(root->left);
}