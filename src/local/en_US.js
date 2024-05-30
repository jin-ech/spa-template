/**
 * @file 系统的文案
 * @author jinech
 * @description 所有的文案统一放此处管理
 */
const enUS = {
    translation: {
        nativeName: 'English',
        apptitle: 'Application',
        button: {
            search: 'search'
        },
        menu: {
            dashboard: 'dashboard',
            tenant: 'tenant',
            accountManage: 'account-manage',
            roomManage: 'room-manage'
        },
        constants: {
            AccountStatusEnum: {
                open: {
                    label: 'open'
                },
                close: {
                    label: 'close'
                }
            }
        },
        page: {
            accountManage: {
                title: 'Account Manage',
                header: {
                    createAccountLable: 'signle create account',
                    batchCreateAccountLabel: 'batch create account',
                    button: {
                        createAccount: 'add acount',
                        templateDownload: 'template download',
                        uploadFile: 'upload file'
                    },
                },
                toolbar: {
                    accountStatus: 'account status',
                    addTime: 'create time',
                },
                table: {
                    index: 'index',
                    id: 'ID',
                    account: 'account',
                    agreement: 'agreement',
                    zuhu: 'zuhu',
                    tel: 'telephone',
                    accountStatus: 'account status'
                }
            }
        }
    }
};

export default enUS;
