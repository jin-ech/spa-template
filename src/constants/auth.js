export const OptCode = {
    EDIT: 'EDIT',
    PRICE: 'PRICE',
    WARN: 'WARN',
    FENHE: 'FENHE',
    JIZHANG: 'JIZHANG',
    PUBLISH: 'PUBLISH',
    CHARGE: 'CHARGE',
    BIND: 'BIND'
};

export const AUTH_ENUM = {
    2001: {
        value: 2001,
        label: '编辑账户信息',
        options: [{
            path: '/tenant/account-manage',
            optCode: OptCode.EDIT
        }]
    },
    2002: {
        value: 2002,
        label: '编辑房间信息',
        options: [{
            path: '/tenant/room-manage',
            optCode: OptCode.EDIT
        }]
    },
    2003: {
        value: 2003,
        label: '编辑表计信息',
        options: [{
                path: '/equipment/electric-manage',
                optCode: OptCode.EDIT
            },
            {
                path: '/equipment/water-manage',
                optCode: OptCode.EDIT
            }
        ]
    },
    2004: {
        value: 2004,
        label: '设置价格方案',
        options: [{
                path: '/equipment/electric-manage',
                optCode: OptCode.PRICE
            },
            {
                path: '/equipment/water-manage',
                optCode: OptCode.PRICE
            }
        ]
    },
    2005: {
        value: 2005,
        label: '设置报警阈值',
        options: [{
            path: '/tenant/account-manage',
            optCode: OptCode.WARN
        }]
    },
    2006: {
        value: 2006,
        label: '设置分闸阈值',
        options: [{
            path: '/tenant/account-manage',
            optCode: OptCode.FENHE
        }]
    },
    2007: {
        value: 2007,
        label: '设置记账周期',
        options: [{
                path: '/equipment/electric-manage',
                optCode: OptCode.JIZHANG
            },
            {
                path: '/equipment/water-manage',
                optCode: OptCode.JIZHANG
            }
        ]
    },
    2008: {
        value: 2008,
        label: '设置时间表',
        options: [{
            path: '/time/template-date-setting',
            optCode: OptCode.EDIT
        }]
    },
    2009: {
        value: 2009,
        label: '编辑账单',
        options: [{
            path: '/bill-manage',
            optCode: OptCode.EDIT
        }]
    },
    2010: {
        value: 2010,
        label: '发布/作废账单',
        options: [{
            path: '/bill-manage',
            optCode: OptCode.PUBLISH
        }]
    },
    2011: {
        value: 2011,
        label: '操作充值缴费',
        options: [{
                path: '/charge-manage/prepay-charge',
                optCode: OptCode.CHARGE
            },
            {
                path: '/charge-manage/afterpay-charge',
                optCode: OptCode.CHARGE
            }
        ]
    },
    2012: {
        value: 2012,
        label: '小程序用户解绑',
        options: [{
            path: '/tenant/account-manage',
            optCode: OptCode.BIND
        }]
    }
};