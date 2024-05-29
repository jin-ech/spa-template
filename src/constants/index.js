

// 模板类型
export const TemplateTypeEnum = {
    price: { value: 1, label: '平价模板' },
    time: { value: 2, label: '分时模板' }
};

// 表具类型
export const MeterTypeEnum = {
    eletr: { label: '电表', value: 1 },
    water: { label: '水表', value: 2 },
    manul: { label: '人工抄表', value: 3 }
};

// 费率类型j
export const TimeTypeEnum = {
    jian: { label: '尖', value: 1 },
    feng: { label: '峰', value: 2 },
    ping: { label: '平', value: 3 },
    gu: { label: '谷', value: 4 }
};

// 表具状态
export const MeterStatusEnum = {
    unactive: { label: '未激活', value: 1 },
    active: { label: '已激活', value: 2 },
    forbidden: { label: '已禁用', value: 3 }
};

// 结算类型
export const SettleTypeEnum = {
    prepay: { label: '预付费', value: 1 },
    afterpay: { label: '后付费', value: 2 },
    manual: { label: '人工抄表', value: 3 }
};

// 分合闸状态
export const SwitchStatusEnum = {
    close: { label: '合闸', value: 1 },
    open: { label: '分闸', value: 2 }
};

// 通讯状态
export const CommunicateStatusEnum = {
    online: { label: '在线', value: 1 },
    offline: { label: '离线', value: 2 }
};

// 保电状态
export const KeepStatusEnum = {
    keep: { label: '保电', value: 1 },
    exile: { label: '不保电', value: 2 }
};

// 记账周期
export const CycleEnum = {
    // dbMonth: {label: '双月', value: 5},
    // day: {label: '日', value: 4},
    year: { label: '年', value: 3 },
    quarterly: { label: '季度', value: 2 },
    month: { label: '月', value: 1 }
};

// 余额清零
export const ClearBalanceEnum = {
    yes: { label: '是', value: 1 },
    no: { label: '否', value: 2 }
};

// 开户状态
export const AccountStatusEnum = {
    open: { label: '已开户', value: 1 },
    close: { label: '销户', value: 2 }
};

// 账单状态
export const BillStatusEnum = {
    unpublish: { label: '未发布', value: 1 },
    payed: { label: '已支付', value: 2 },
    published: { label: '已发布', value: 3 },
    invalid: { label: '已作废', value: 5 }
};

// 主账单状态（子账单状态）
export const BillDtlStatusEnum = {
    create: { label: '未发布', value: 1 },
    audit: { label: '已发布', value: 2 },
    payed: { label: '已支付', value: 3 }
};

// 费用状态
export const FeeStatusEnum = {
    unpayed: { label: '未缴费', value: 3 },
    payed: { label: '已缴费', value: 2 }
    // payed: { label: '已支付', value: 3 }
};

// 是否发送短信
export const SendMsgEnum = {
    yes: { label: '是', value: 1 },
    no: { label: '否', value: 2 }
};

// 是否启用小程序充值
export const WxEnum = {
    yes: { label: '是', value: 1 },
    no: { label: '否', value: 2 }
};

// 充值类型
export const ChargeTypeEnum = {
    wx: { label: '微信小程序充值', value: 1 },
    prepay: { label: '后台预付费充值', value: 2 },
    afterpay: { label: '后台后付费缴费', value: 3 }
};

// 订单状态
export const OrderStatusEnum = {
    init: { label: '初始状态', value: 1 },
    paying: { label: '支付中', value: 2 },
    success: { label: '支付成功', value: 3 },
    failed: { label: '支付失败', value: 4 },
    // callRefund: { label: '发起退款', value: 5 },
    // refundSuccess: { label: '退款成功', value: 6 },
    // refundFailed: { label: '退款失败', value: 7 }
};

// 缴费类型
export const PayTypeEnum = {
    prepay: { label: '预付费', value: 1 },
    afterpay: { label: '后付费', value: 2 }
};

// 报警状态
export const WarnStatusEnum = {
    init: { label: '初始', value: 1 },
    resolve: { label: '已解决', value: 2 }
};

// 用户状态
export const WeexUserStatusEnum = {
    normal: { label: '正常', value: 1 },
    unvaliable: { label: '停用', value: 2 }
};

// 月度结算状态
export const MonthlyStatusEnum = {
    init: { label: '待生效', value: 1 },
    processing: { label: '进行中', value: 2 },
    complete: { label: '待审核', value: 3 },
    audited: { label: '审核完成', value: 4 },
    payed: { label: '扣款完成', value: 5 },
};

// // 月度结算详情状态
// export const MonthlyDetailStatusEnum = {
//     init: { label: '初始', value: 1 },
//     payed: { label: '扣款完成', value: 2 },
// };

