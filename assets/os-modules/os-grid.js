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
    var element = require('./os-element');

    var Grid = function (option) {
        this.renderEle = option.render == undefined ? $("body") : option.render
        this.init(option);
        return this;
    }

    Grid.prototype.render = function () {
        this.renderEle.append(this.self);
    }
    Grid.prototype.init = function (option) {
        var that = this;
        this.self = element.build().portlet({
            id: "grid",
            title: "grid",
            fullscreen: true,
            render: that.renderEle
        });
        var button = element.build().button({
            cls: "green-haze btn-circle",
            icon: "fa fa-check",
            text: "alertSuccess",
            click: function () {
                that.self.block();
            }
        });
        this.self.append(button);
        var button2 = element.build().button({
            cls: "green-haze btn-circle",
            icon: "fa fa-check",
            text: "alertSuccess",
            click: function () {
                that.self.unBlock();
            }
        });
        button2.appendTo(that.self);
    }

    module.exports = Grid;
});
