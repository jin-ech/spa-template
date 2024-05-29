import {
    useState,
    useRef,
    useEffect,
    useMemo
} from "react";

const useSelectRowKeys = (dataSource, onChange) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const selectDataItemsRef = useRef([]);

    const onSelectChange = (keys, seletDataItems) => {
        setSelectedRowKeys(keys);
        selectDataItemsRef.current = seletDataItems;
        onChange?.(keys, seletDataItems);
    };

    const resetRowKeys = () => {
        setSelectedRowKeys([]);
        selectDataItemsRef.current = [];
    };

    useEffect(() => {
        resetRowKeys();
    }, [dataSource]);

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const disabledBtn = useMemo(() => selectedRowKeys.length === 0, [selectedRowKeys]);

    return {
        selectedRowKeys,
        selectDataItemsRef,
        rowSelection,
        disabledBtn
    }
};

export default useSelectRowKeys;