const result = {
    "data": {
        "username": "jinech",
    },
    "msg": "success",
    "status": 1
};

exports.getData = (method, data) => {
    // 可根据data进行操作
    return JSON.stringify(result);
};
