import i18n from "@/i18next";


// 开户状态
export const AccountStatusEnum = {
    open: { label: i18n.t('constants.AccountStatusEnum.open.label'), value: 1 },
    close: { label: i18n.t('constants.AccountStatusEnum.close.label'), value: 2 }
};
