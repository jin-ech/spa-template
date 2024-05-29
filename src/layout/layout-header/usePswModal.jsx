
import React from 'react';

import { Form } from 'antd';
import { FormInput } from '@/components/form-comps';

import useConfirmModal from '@/hooks/useConfirmModal';

import { renderFormItems } from '@/utils';
import useRequestSubmit from '@/hooks/useRequest';
import { changePswAction } from '@/request/actions';

const usePswModal = ({ onOk }) => {
    const [form] = Form.useForm();
    const { actionTask: changePswTask, loading: changePswLoading } = useRequestSubmit({ action: changePswAction });
    const { modalRenderer, showModal } = useConfirmModal({
        title: '修改密码',
        width: 420,
        okButtonProps: { loading: changePswLoading },
        onOk: async () => {
            try {
                const values = await form.validateFields();
                console.log('values: ', values);
                await changePswTask(values);
                // TODO
                form.resetFields();
                onOk();
            }
            catch (err) {
                console.log('err: ', err);
            }
        },
        children: (
            <Form form={form} labelCol={{ flex: '100px' }} labelAlign='left'>
                {renderFormItems({
                    items: [
                        {
                            label: '旧密码',
                            name: 'oldPassword',
                            rules: [
                                { required: true, message: '请输入旧密码' }
                            ],
                            component: <FormInput.Password />
                        },
                        {
                            label: '新密码',
                            name: 'password',
                            hasFeedback: true,
                            rules: [
                                { required: true, message: '请输入新密码' }
                            ],
                            component: <FormInput.Password />
                        },
                        {
                            label: '确认密码',
                            name: 'confirmPassword',
                            dependencies: ['confirmPassword'],
                            hasFeedback: true,
                            rules: [
                                { required: true, message: '请确认旧密码' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('前后密码不一致');
                                    }
                                })
                            ],
                            component: <FormInput.Password />
                        }
                    ]
                })}
            </Form>
        )
    });

    return {
        modalRenderer,
        showModal
    };
};

export default usePswModal;
