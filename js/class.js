"use strict";
//类的修饰符 
//public ;公有，在类里面，子类，类外面可以访问
//protected;保护类型,在类里面，子类里面可以访问，类外面不可以
//pravite;私有；只能在类里面访问，子类和类外面不能访问
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        //构造函数，实例化类的时候触发的方法
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + ' run');
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.sleep = function () {
        console.log(this.name + ' sleep');
    };
    Person.prototype.hello = function () {
        this.sleep();
        console.log(this.name + ' hello');
    };
    return Person;
}());
var p = new Person('king');
p.run();
p.setName('john');
console.log(p.getName());
//ts继承 extends,super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        //初始化父类的构造函数
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        console.log(this.name + ' is running');
    };
    Web.prototype.work = function () {
        console.log(this.name + ' work');
    };
    Web.prototype.say = function () {
        this.hello();
    };
    return Web;
}(Person));
var w = new Web('sara');
w.run();
w.work();
w.say();
