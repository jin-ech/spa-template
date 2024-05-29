
import React, { useMemo, useState } from 'react';

import { Form, Modal, Spin } from 'antd';
import { FormAutoComplete, FormButton, FormInputNumber, FormLabel, FormSelect } from '@/components/form-comps';
import notification from '@/components/notification';

import { addElectricAction, amountTransferAction, meterAllListAction } from '@/request/actions';

import { renderFormItems, toFixed } from '@/utils';

import useRequestSubmit from '@/hooks/useRequest';

import styles from './index.module.less';
import useRequestList from '@/hooks/useRequestList';

const getItems = ({
    meterData = [],
    surplus_amount
}) => ([
    {
        name: 'from',
        label: '来源表号',
        component: <FormLabel />
    },
    {
        name: 'to',
        label: '转移到表号',
        rules: [
            { required: true, message: '请输入表具编号' }
        ],
        component: (
            <FormAutoComplete
                style={{ width: 240 }}
                options={meterData.map(item => ({ value: item.electric_no, label: item.electric_no }))}
            />
        )
    },
    {
        name: 'amount',
        label: '转移金额',
        rules: [
            { required: true, message: '请选择结算类型' },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (value > +surplus_amount) {
                        return Promise.reject(`最多转移${toFixed(surplus_amount)}元`);
                    }
                    return Promise.resolve();
                }
            })
        ],
        component: <FormInputNumber style={{ width: 240 }} precision={6} min={0} max={999999999} />
    }
]);

const useTransferModal = ({ onOk }) => {
    const [visible, updateVisible] = useState(false);
    const [form] = Form.useForm();
    const { loading, actionTask } = useRequestSubmit({ action: amountTransferAction });
    // 获取转移表
    const { data: meterData, loading: meterLoading, getDataTask: getMeterDataTask }
        = useRequestList({ action: meterAllListAction, immediate: false });
    const [initValues, updateInitValues] = useState();

    const showModal = async values => {
        updateInitValues(values);
        updateVisible(true);
        getMeterDataTask({
            meter_id: values.id,
            meter_type: values.meter_type,
            device_type: values.type
        });
        form.setFieldsValue({
            from: values.electric_no
        });
    };

    const closeModal = () => {
        updateVisible(false);
        updateInitValues();
        form.resetFields();
    };

    /**
     * @description: 执行提交
     * @return {*}
     */
    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            await actionTask(values);
            notification.success('金额转移成功');
            closeModal();
            onOk();
        }
        catch (err) {
            console.log('err: ', err);
        }
    };

    const items = useMemo(() => getItems({
        meterData: meterData?.data,
        surplus_amount: initValues?.surplus_amount
    }), [meterData, initValues]);

    const modalRenderer = useMemo(() => (
        <Modal
            open={visible}
            className={styles.container}
            title='金额转移'
            width={420}
            destroyOnClose
            onCancel={closeModal}
            footer={null}
        >
            <div className={styles.content}>
                <Spin spinning={meterLoading}>
                    <Form
                        form={form}
                        layout='horizontal'
                        style={{ width: '100%' }}
                        labelAlign='left'
                        labelCol={{ flex: '100px' }}
                    >
                        {renderFormItems({
                            items
                        })}
                    </Form>
                    <div className={styles.footer}>
                        <FormButton ghost onClick={closeModal}>关闭</FormButton>
                        <FormButton type='primary' loading={loading} onClick={handleSubmit}>转移</FormButton>
                    </div>
                </Spin>
            </div>
        </Modal>
    ), [visible, loading, initValues, meterLoading]);

    return {
        showModal,
        closeModal,
        modalRenderer
    };
};

export default useTransferModal;