import React, { useEffect, useState } from 'react'
import { BinarySearchTree } from './TreeClasses';
import './BST_Component.css'
import { Button, Grid, TextField, Typography } from '@mui/material';

function BST_Component() {
    const [BST_Tree, setBST_Tree] = useState(null);
    const [refreshTree, setRefreshTree] = useState(false)
    const [numberInput, setNumberInput] = useState();

    const createBinarySearchTree = () => {
        // create an object for the BinarySearchTree
        const BST = new BinarySearchTree();
        // Inserting nodes to the BinarySearchTree
        // BST.insert(15);
        // BST.insert(25);
        // BST.insert(10);
        // BST.insert(7);
        // BST.insert(22);
        // BST.insert(17);
        // BST.insert(13);
        // BST.insert(5);
        // BST.insert(9);
        // BST.insert(27);

        const root = BST.getRootNode();
        setBST_Tree(BST);
        BST.preOrderList = [];
        BST.preorder(root);
        console.log(BST.preOrderList.join(', '))
    }

    useEffect(() => {
        const BST = new BinarySearchTree();
        setBST_Tree(BST);
        // createBinarySearchTree()
    }, [])

    const constructNode = (value, isRootData) => <div class={`person ${isRootData? '': 'child'}`}>
        <div class="name">{value}</div>
    </div>

    const displayTree = (node) => {
        if (node === null) {
            return;
        } else if (node.left === null && node.right === null && node.data !== BST_Tree.root.data) {
            return constructNode(node.data, false)

        } else {
            return (<div class={node.data === BST_Tree.root.data && 'parent'}>
                {constructNode(node.data, node.data === BST_Tree.root.data)}
                {(node.left || node.right) && (<ul>
                    {node.left && <li>{displayTree(node.left)}</li>}
                    {node.right && <li>{displayTree(node.right)}</li>}
                </ul>)}
            </div>)
        }
    }

    const insertDataToBinaryTree = () => {
        BST_Tree.insert(Number(numberInput))
        setNumberInput(null)
        setRefreshTree(!refreshTree)
    }

    return (
        <>
            <Grid container sx={{ mt: 2 }}>
                <TextField
                    type='number'
                    onChange={(e) => setNumberInput(e.target.value)}
                    label='Add data to Binary Tree'
                    value={numberInput}
                ></TextField>
                <Button
                    variant='contained' sx={{ ml: 1 }}
                    onClick={insertDataToBinaryTree}
                    disabled={!numberInput}
                >
                    {'Add Data'}
                </Button>
            </Grid>
            {BST_Tree && BST_Tree.root ?
                (<div class="tree">
                    <ul>
                        <li>
                            {displayTree(BST_Tree.root)}
                        </li>
                    </ul>
                </div>) :
                <Typography variant='body1'>{'No Data in the Tree to Display'}</Typography>
            }
        </>
    )
}

export default BST_Component