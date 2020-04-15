//定义没有依赖的模块(sea.js遵循CMD规范 对于模块是懒执行)

define(function (require, exports, module) {
    let msg = "foo__module1";

    function foo() {
        console.log(msg);
    }

    exports.foo1 = { foo };
});