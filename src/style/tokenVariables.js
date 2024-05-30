
import theme from '@/style/lessVariables';

export const tokenColors = Object.keys(theme).reduce((res, key) => {
    const varName = key.split('-').map((name, index) => index === 0 ? name : (name.charAt(0).toUpperCase() + name.slice(1))).join('');
    const isNumType = theme[key].includes('px');
    const value = isNumType ? +theme[key].replace('px', '') : theme[key];
    res[varName] = value;
    return res;
}, {});