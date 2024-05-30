/**
 * @file 系统的文案
 * @author jinech
 * @description 所有的文案统一放此处管理
 */
const zhCN = {
    translation: {
        nativeName: '中文',
        apptitle: '应用',
        button: {
            search: '搜索'
        },
        menu: {
            dashboard: '首页',
            tenant: '租户管理',
            accountManage: '账户管理',
            roomManage: '房间管理'
        },
        constants: {
            AccountStatusEnum: {
                open: {
                    label: '已开户'
                },
                close: {
                    label: '销户'
                }
            }
        },
        page: {
            accountManage: {
                title: '账户管理',
                header: {
                    createAccountLable: '单次开户',
                    batchCreateAccountLabel: '批量开户',
                    button: {
                        createAccount: '开户',
                        templateDownload: '模板下载',
                        uploadFile: '文件上传'
                    },
                },
                toolbar: {
                    accountStatus: '开户状态',
                    addTime: '开户时间',
                },
                table: {
                    index: '序号',
                    id: 'ID',
                    account: '账号',
                    agreement: '合同号',
                    zuhu: '租户姓名',
                    tel: '联系电话',
                    accountStatus: '账户状态'
                }

            }
        }
    }
};

export default zhCN;
