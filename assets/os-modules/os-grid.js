define(function (require, exports, module, undefined) {
    var Grid = require('grid');
    exports.info = {
        version: "1.0",
        author: "ChenGJ"
    };
    exports.build = function (option) {
        var g = new Grid(option);
        return g;
    };
});

define("grid", function (require, exports, module, undefined) {
    function isType(type) {
        return function (obj) {
            return {}.toString.call(obj) == "[object " + type + "]"
        }
    }

    var isObject = isType("Object");
    var isString = isType("String");
    var isArray = Array.isArray || isType("Array");
    var isFunction = isType("Function");
    var isJquery = isType("jQuery");
    var element = require('os-element');

    var Grid = function (option) {
        this.renderEle = option.render == undefined ? $("body") : option.render
        this.init(option);
        return this;
    }

    Grid.prototype.init = function (option) {
        this.element = element.build().portlet({
            id: "grid",
            title: "表格插件",
            fullscreen: true
        }).appendTo(this.renderEle);

    }

    module.exports = Grid;
});
