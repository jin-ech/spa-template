/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-06 14:29:16
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-02-01 14:47:03
 * @FilePath: \spa-template\src\pages\project\node-type\hooks\useConfirmModal\index.tsx
 * @Description: 确认删除弹窗
 */

import React, { useState, useMemo } from 'react';

import { Modal, ModalProps } from 'antd';
import '@/components/form-comps/style/modal.less';
import '@/components/form-comps/style/button.less';

interface UseConfirmModalProps extends ModalProps {
    onOk?: (values?: any) => void;
    onCancel?: () => void;
    children?: React.ReactNode;
};

const useConfirmModal = ({
    onOk,
    onCancel,
    children,
    ...props
}: UseConfirmModalProps) => {
    const [visible, updateVisible] = useState(false);
    const [loading, updateLoading] = useState(false);
    const [initValues, updateIntValues] = useState();

    /**
     * @description: 展示弹窗
     * @param {any} values
     * @return {*}
     */
    const showModal = (values?: any) => {
        updateIntValues(values);
        updateVisible(true);
    };

    /**
     * @description: 关闭弹窗
     * @return {*}
     */
    const closeModal = () => {
        onCancel?.();
        updateVisible(false);
    };

    /**
     * @description: 保存
     * @return {*}
     */
    const handleOk = async () => {
        try {
            updateLoading(true);
            await onOk?.(initValues);
            closeModal();
        }
        finally {
            updateLoading(false);
        }
    };

    const modalRenderer = useMemo(() => (
        <Modal
            {...props}
            closable
            maskClosable={false}
            open={visible}
            cancelButtonProps={{ type: 'primary', ghost: true }}
            onCancel={closeModal}
            onOk={handleOk}
            okText='保存'
            cancelText='关闭'
            okButtonProps={{ loading }}
        >
            {children}
        </Modal>
    ), [visible, loading, initValues]);


    return {
        visible,
        modalRenderer,
        showModal
    };
};

export default useConfirmModal;
