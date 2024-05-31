/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-02 11:41:54
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-31 15:39:52
 * @FilePath: \spa-template\src\pages\app\app-detail\index.tsx
 * @Description: 首页
 */

import React, { useMemo, useRef } from 'react';

import { Circle, Layer, Line, Rect, Image as KonvaImage, Group } from 'react-konva';
import { Button } from 'antd';
import { FormKonva } from '@/components/form-comps';

import useModal from '@/hooks/useModal';
import { mockRequest } from '@/utils';

import styles from './index.module.less';

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
            <FormKonva.Stage width={980} height={720} className={styles.stage}>
                <Layer ref={ref}>
                    <FormKonva.Transfomer>
                        <Rect x={48} y={48} width={24} height={24} fill='#1269db' draggable />
                    </FormKonva.Transfomer>
                    <FormKonva.Transfomer>
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
                    </FormKonva.Transfomer>
                    <Line points={[48, 48, 240, 240]} stroke='black' closed={false} />
                    <FormKonva.Transfomer>
                        <Group
                            x={300}
                            y={300}
                            draggable
                            {...cursorProps}
                        >
                            <KonvaImage
                                image={imgRenderer}
                                fill='#888'
                                shadowBlur={10}
                            />
                            <Rect x={0} y={0} width={24} height={24} fill='#1269db' />
                        </Group>
                    </FormKonva.Transfomer>
                    <FormKonva.Transfomer>
                        <Rect
                            x={150}
                            y={150}
                            width={100}
                            height={100}
                            fill='#1269db'
                            id='rect'
                            draggable
                        />
                    </FormKonva.Transfomer>
                </Layer>
            </FormKonva.Stage>
            {modalRenderer}
        </div>
    );
};

export default Dashboard;
