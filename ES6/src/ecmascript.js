/*
   * var 的缺点
   * 1. 重复定义不报错
   * 2. 无块级作用域
   * 3. 不限限制修改
   * */

/* 不能重复声明
let a = 12;
let a = 3;
alert(a);*/

/*有块级作用域
if(true){
    let a = 5;
}
alert(a);*/

/*let 和 var 不同 不存在变量提升
也可以叫做"暂时性死区TDZ"
if(true){
     alert(a);
     let a = 12;
 }*/

/*限制修改
const a = 12;
a = 22;
alert(a);*/

/*
* 箭头函数
* let show = function(a,b){
*        return a+b;
* }
*
* let show = (a,b)=>a+b;
*
* function show(a) {
    return a*3;
}
show = a=>a*3;
alert(show(3));
* */

/*展开运算符
...[1,2,3] === 1,2,3
function sum(a,b,c) {
    console.log(a+b+c);
}
let arr = [1,2,3];
sum(1,2,3);//6
sum(...arr);//6
*/

/*默认参数
function add(a, b, c=4) {
    console.log(a + b + c);//7
}
add(1,2);*/

/*参数扩展
function add(a,b,...arg) {
    console.log(a,b);
    console.log(...arg);
    console.log(arguments);
}
add(1,2,3,4,5,6);*/

/*
* 模块化(import export export default)
* */

/*
* 数组: map(映射) filter(过滤) forEach(遍历) reduce(汇总) (every some...)
* 注意: forEach 和 map 的区别是:
*   forEach 对数组中的每一项运行指定的函数，这个方法没有返回值;
*   map 对数组中的每一项运行指定的函数, 返回每次函数调用的结果组成的数组。
* */

/*let arr = [12, 5, 6, 8, 9, 3, 5];
let judge = arr.map(item => item > 6 ? 'good' : 'bad');
console.log(judge);//["good", "bad", "bad", "good", "good", "bad", "bad"]

arr.forEach((item, index) => {
    alert("第" + index + "个数为: " + item);
});

 let res = arr.reduce((tmp, item, index, arr) => {
     console.log(index);//1,2,3,4,5,6. index 从1开始
     console.log(arr);//就是要汇总的数组
     return tmp + item;
 });
 console.log(res);//返回的是数组各项之和

let avg = arr.reduce((tmp, item, index) => {
   if(index < arr.length - 1){
       return tmp + item;
   }else{
       return (tmp + item)/arr.length;
   }
});
console.log(avg);

let result = arr.filter(item=>item%3===0);
console.log(result);*/

/*
* 字符串: 字符串模板, startsWith, endsWith, includes
* */
/*
let str = "Hello world!";
let obj = {
    name: "liming",
    age: 30
};
function hello() {
    return "hello world";
}
/!*alert("abc
    de"); 不能换行 会报错*!/
alert(`abc
de`);//原样输出
console.log(`My name is ${obj.name}, My age is ${obj.age}`);
console.log(`${str}`);//可以是变量
console.log(`${hello()}`);//可以使函数

console.log(str.startsWith("Hello"));//true
console.log(str.endsWith("d!"));//true
console.log(str.includes("o wor"));//true
*/

/*面向对象
* ES5
* ES6: class extends super(关键字)
* */

/*
//ES5 定义对象 组合模式
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayName = function () {
    console.log(this.name);
};
let user = new User("yancq",24);
user.sayName();

//ES5 继承
function VipUser(name, age, level) {
    User.call(this,name,age);
    this.level = level;
}
VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;
VipUser.prototype.showLevel = function () {
    console.log(this.level);
};
let vip = new VipUser("sungq",18,9);
vip.sayName();//继承过来的方法
vip.showLevel();
*/

/*
//ES6 构建对象
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name);
    }
}
let user = new User('yancq',24);
user.sayName();

//ES6 继承
/!*
* 子类必须在constructor方法中调用super方法,否则在创建新实例时会报错。这是因为子类没有自己的 this 对象，而是
* 继承父类的this对象.在调用super方法之前使用this会报错。
* *!/
class VipUser extends User {
    constructor(name,age,level){
        super(name,age);
        this.level = level;
    }
    showLevel(){
        console.log(this.level);
    }
}
let vip = new VipUser("sungq",18,9);
vip.sayName();
vip.showLevel();
*/

/*
* 解决异步回调地狱: Promise
* */
/*let p = new Promise((resolve, reject) => {
    $.ajax({
        url: "./static/data.json",
        dataType: "json",
        success(data) {
            resolve(data);
        },
        error(err) {
            reject(err);
        }
    })
});
p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

Promise.all([
    $.ajax({
        url: "./static/data.json",
        dataType: "json"
    }),
    $.ajax({
        url: "./static/data.txt",
        dataType: "json"
    })
]).then((resArr) => {
    let [res1, res2] = resArr;//解构赋值
    console.log("res1:" + res1);
    console.log("res2:" + res2);
}, (err) => {
    console.log(err);
});*/


/*function timeout(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,"done");//setTimeout、setInterval第三个及以后的参数可以作为resolve函数的参数
    })
 }
 timeout(100).then((value)=>{
     console.log(value);
 });*/

/*
* 异步编程解决办法:Generator
* */
const co = require("co");
const $ = require("jquery");
co(function* getInfo() {
    let arr = yield $.ajax("./static/data.txt");
    console.log(arr);
    alert("get arr");
    let json = yield $.ajax("./static/data.json");
    console.log(json);
    alert("get json");
    alert("get all");
});