/*
 * err 操作的成功或失败的状态
 * results 操作返回的结果和信息
 */
do_something(param1, param2, paramN, function (err, results) {
   console.log('This is callback.')
});

// 异步调用无法用常规的 try...catch 语句捕捉错误
try {
    setTimeout(function () {
        throw new Error('Uh oh!');
    }, 2000);
} catch (e) {
    console.log('I caught the error: ' + e.message);
}