//定义有依赖的模块(require.js 遵循AMD规范，对于模块是预执行)
define(["DS","angular"],function (dataService,angular) {
    let msg = "alerter.js";
    function showmsg() {
        console.log(msg,dataService.getName());
        console.log(angular);
    }
    return {showmsg}
});