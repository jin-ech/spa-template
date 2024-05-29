/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2023-08-14 14:42:33
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-29 15:01:12
 * @FilePath: \spa-template\src\components\chart\index.jsx
 * @Description: 图表
 */

import React, { useEffect, useRef, useImperativeHandle } from 'react';
import cls from 'classnames';
import { init } from 'echarts';

import lineOptions from './options/line';

import styles from './index.module.less';

const Chart = React.forwardRef((props, ref) => {
    const {
        options = lineOptions,
        className,
        ...extraProps
    } = props;
    const prefix = cls(styles.chart, className);
    const rootRef = useRef();
    const chartRef = useRef();

    useImperativeHandle(ref, () => ({
        getInstance: () => chartRef.current
    }));

    useEffect(() => {
        chartRef.current?.setOption(options);
    }, [options]);

    useEffect(() => {
        const root = rootRef.current;
        const $chart = init(root);
        chartRef.current = $chart;
        const resizeEvent = () => {
            $chart.resize();
        };
        window.addEventListener('resize', resizeEvent);
        return () => {
            window.removeEventListener('resize', resizeEvent);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={prefix} {...extraProps} ref={rootRef}></div>
        </div>
    );
});

export default Chart;