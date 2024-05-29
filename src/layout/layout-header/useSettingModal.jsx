
import React, { useEffect } from 'react';

import { Form } from 'antd';

import useConfirmModal from '@/hooks/useConfirmModal';

import { renderFormItem, renderFormItems } from '@/utils';
import { FormInputNumber, FormSwitch } from '@/components/form-comps';
import useRequestSubmit from '@/hooks/useRequest';
import { globalConfigAction, globalConfigListAction } from '@/request/actions';
import useRequestList from '@/hooks/useRequestList';
import notification from '@/components/notification';

const useSettingModal = () => {
    const [form] = Form.useForm();
    const { actionTask } = useRequestSubmit({ action: globalConfigAction });
    const { data: globalConfigListData, getDataTask } = useRequestList({ action: globalConfigListAction });
    const { modalRenderer, showModal, visible } = useConfirmModal({
        title: '设置',
        width: 420,
        onOk: async () => {
            try {
                const values = await form.validateFields();
                const queryParams = [
                    {
                        field_meaning: '滞纳金开关',
                        field_label: 'late_fee_switch',
                        field_values: values.isLateFee ? '1' : '0',
                        id: '1'
                    },
                    {
                        field_meaning: '发送短信间隔',
                        field_label: 'sendMsgGap',
                        field_values: values.sendMsgGap,
                        id: '2'
                    }
                ];
                await actionTask(queryParams);
                notification.success('系统设置成功');
                form.resetFields();
                getDataTask();
            }
            catch (err) {
                console.log('err: ', err);
            }
        },
        children: (
            <Form form={form} labelCol={{flex: '120px'}} labelAlign='left'>
                {renderFormItems({
                    items: [
                        {
                            valuePropName: 'checked',
                            label: '滞纳金开关',
                            name: 'isLateFee',
                            initialValue: false,
                            component: <FormSwitch checkedChildren='开' unCheckedChildren='关' />
                        },
                        {
                            label: '发送短信间隔',
                            name: 'sendMsgGap',
                            component: <FormInputNumber suffix='天/次' min={0} max={365 * 10} precision={0} />
                        }
                    ]
                })}
            </Form>
        )
    });

    useEffect(() => {
        if (!globalConfigListData) {
            return;
        }
        const values = globalConfigListData.data;
        if (values) {
            form.setFieldsValue({
                isLateFee: !!(+values[0]?.field_values),
                sendMsgGap: values[1]?.field_values,
            });
        }
    }, [globalConfigListData, visible]);

    return {
        modalRenderer,
        showModal
    };
};

export default useSettingModal;
