
import React, { useContext, useEffect, useState } from 'react';

import { Transformer } from 'react-konva';
import { context } from '../context';

const FormTransformer: React.FC<typeof Transformer['propTypes'] & { children?: React.ReactElement }> = ({
    children,
}) => {
    const shapeRef = React.useRef<any>();
    const trRef = React.useRef<any>();
    const [isSelected, updateIsSelected] = React.useState(false);
    const [shapeProps, updateShapeProps] = useState<any>();

    const value = useContext(context);

    useEffect(() => {
        if (value.isClickOnEmpty) {
            updateIsSelected(false);
        }
    }, [value]);

    useEffect(() => {
        updateShapeProps(children.props);
    }, [children.props]);

    React.useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            {React.cloneElement(children, {
                ...shapeProps,
                ref: shapeRef,
                onClick: () => updateIsSelected(true),
                onTap: () => updateIsSelected(true),
                onTransformEnd: () => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    // const scaleX = node.scaleX();
                    // const scaleY = node.scaleY();

                    // we will reset it back
                    // node.scaleX(1);
                    // node.scaleY(1);
                    // console.log('node: ', node);
                    updateShapeProps({
                        ...shapeProps,
                        ...node.attrs
                        // x: node.x(),
                        // y: node.y(),
                        // // set minimal value
                        // width: Math.max(5, node.width() * scaleX),
                        // height: Math.max(node.height() * scaleY),
                        // radius: node.radius()
                    });
                }
            })}
            {isSelected && (
                <Transformer
                    ref={trRef}
                    flipEnabled={false}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </React.Fragment>
    );
};

export default FormTransformer;
