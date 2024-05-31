/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-02 11:41:54
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-31 11:07:03
 * @FilePath: \spa-template\src\pages\app\app-detail\index.tsx
 * @Description: 首页
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Circle, Layer, Line, Rect, Stage, Image as KonvaImage } from 'react-konva';

import styles from './index.module.less';
import { Button } from 'antd';
import useModal from '@/hooks/useModal';
import { mockRequest } from '@/utils';

const cursorProps = {
    onDragStart: () => {
        document.body.style.cursor = 'grabbing';
    },
    onDragEnd: () => {
        document.body.style.cursor = 'default';
    },
    onMouseOver: () => {
        document.body.style.cursor = 'pointer';
    },
    onMouseLeave: () => {
        document.body.style.cursor = 'default';
    }
};

const Dashboard = () => {
    const ref = useRef();
    const { modalRenderer, showModal } = useModal({
        title: 'modal title',
        children: <div>jinech</div>,
        onOk: () => mockRequest(() => null, 1000)
    });

    const handleGetLayerData = () => {
        const layer = ref.current;
        const children = layer.children;
        const res = children.map(child => {
            return child.attrs;
        });
        console.log('res: ', res);
    };

    const imgRenderer = useMemo(() => {
        const img = new Image();
        img.src = '/static/image/logo.png';
        img.width = 120;
        img.height = 40;
        return img;
    }, []);

    return (
        <div className={styles.container}>
            <Button style={{ marginBottom: 24, display: 'block' }} type='primary' onClick={handleGetLayerData}>get layer data</Button>
            <Stage width={980} height={720} className={styles.stage}>
                <Layer ref={ref}>
                    <Rect x={48} y={48} width={24} height={24} fill='#1269db' draggable />
                    <Circle
                        radius={48}
                        x={240}
                        y={240}
                        stroke='#1269db'
                        fill='red'
                        draggable
                        data={{ name: 'jinech', age: 30 }}
                        onClick={showModal}
                        {...cursorProps}
                    />
                    <Line points={[48, 48, 240, 240]} stroke='black' closed={false} />
                    <KonvaImage
                        x={300}
                        y={300}
                        image={imgRenderer}
                        draggable
                        {...cursorProps}
                    />
                </Layer>
            </Stage>
            {modalRenderer}
        </div>
    );
};

export default Dashboard;
