import React, { useCallback, useEffect } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    useReactFlow,
    ReactFlowProvider,
    MiniMap,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { Button } from 'antd';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Dooring' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'Flow' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

const CustomNode = ({ data }) => {
    return (
        <div style={{ background: '#fff', borderRadius: 12, padding: 4, border: '1px solid #000' }}>
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
            />
            <label style={{ fontSize: 12 }}>{data?.label || '-'}</label>
        </div>
    );
};

function LayoutFlow() {
    const { fitView } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = params => {
        const _edges = addEdge(params, edges);
        setEdges(_edges);
    };

    const handleAddNode = () => {
        const random = Math.random() * 100;
        const _node = { id: `${+new Date()}`, parentId: '1', extent: 'parent', type: 'CustomNode', position: { x: random, y: 0 }, data: { label: +new Date() } };
        setNodes([...nodes, _node]);
    };

    useEffect(() => {
        setNodes([...nodes]);
        setEdges([...edges]);
        requestAnimationFrame(() => {
            fitView();
        });
    }, [nodes, edges]);

    return (
        <>
            <Button onClick={handleAddNode}>add node</Button>
            <div style={{ width: '100%', height: '920px', background: '#eee' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={{ CustomNode }}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <MiniMap />
                </ReactFlow>
            </div>
        </>
    );
}

export default function () {
    return (
        <ReactFlowProvider>
            <LayoutFlow />
        </ReactFlowProvider>
    );
}