
import React, { forwardRef, useState } from 'react';
import { Stage } from 'react-konva';

import { context } from '../context';

const FormStage: React.ForwardedRef<any> = forwardRef((props, ref) => {
    const { children, ...extraProps } = props;

    const [isClickOnEmpty, updateIsClickOnEmpty] = useState(true);

    const handleStageClick = (e: any) => {
        const $isClickOnEmpty = e.target === e.target.getStage();
        updateIsClickOnEmpty($isClickOnEmpty);
    };

    return (
        <context.Provider value={{ isClickOnEmpty }}>
            <Stage ref={ref} {...extraProps} onClick={handleStageClick}>
                {children}
            </Stage>
        </context.Provider>
    );
});

export default FormStage;