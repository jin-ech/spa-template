
import { LayoutSiderItem, ItemType } from '@/configure/layout';

/**
 * @description: 格式化菜单配置，混入事件等其他配置项
 * @param {LayoutSiderItem} layoutItems
 * @param {function} onClickHandle
 * @return {*}
 */
export const getMenuItems = (
    layoutItems: LayoutSiderItem[],
    onClickHandle: (item: LayoutSiderItem) => void,
    onTitleClick: (item: { key: string }) => void
): ItemType[] => {
    const items = layoutItems.reduce((res, item) => {
        const { key, children, path, ...props } = item;
        let menuItem = {
            ...props,
            key,
            path,
            onClick: (val: any) => onClickHandle({ ...val, path })
        };
        if (children && children.length > 0) {
            // @ts-ignore
            menuItem = { ...menuItem, children: getMenuItems(children, onClickHandle), onTitleClick };
        }
        return [...res, menuItem];
    }, []);
    return items;
};

/**
 * @description: 根据指定需求获取当前菜单路径
 * @param {LayoutSiderItem} tree
 * @param {function} cb
 * @return {*}
 */
export const findTreePath = (tree: LayoutSiderItem[], cb: (item: LayoutSiderItem) => boolean): string[] => {
    for (let node of tree) {
        if (cb(node)) {
            return [node.key as string];
        }
        if (node.children) {
            const path = findTreePath(node.children, cb);
            if (path) {
                return [node.key as string, ...path];
            }
        }
    }
};