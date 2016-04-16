/**
 * Created by cgj on 2016/4/16.
 */
define(function (require) {
    var grid = require("os-grid");
    grid.build({
        render:$("#grid")
    }).render();
    
    var element = require("os-element");
    
    var row = element.build().row({
        render: "div.page-content > div.container",
        id: "row_id"
    });
    var col1 = element.build().col({
        id: "col_id",
        span: "6",
        render: row
    });
    var col2 = element.build().col({
        id: "col2_id",
        span: "6",
        render: row
    });
    var alertDiv = element.build().alert({
        id: "alert_id",
        type: "success",
        message: "成功",
        close: false
    });
    var h4 = $('<h4 class="block">Default Alerts</h4>');
    var button = element.build().button({
        cls: "green-haze btn-circle",
        icon: "fa fa-check",
        text: "alertSuccess",
        click: function () {
            portlet.alert("success", "滚动到我这！", 1000, true);
        }
    });
    var button2 = element.build().button({
        cls: "green-haze btn-circle",
        icon: "fa fa-user",
        loadAfterClick: true,
        loadText: "等待中...",
        text: "alertInfo",
        iconPosition: "right",
        click: function () {
            portlet.alert("info", "滚动到我这！", 1000, true);
            setTimeout(function () {
                button2.reset();
            }, 2000)
        }
    });
    var dropdown = element.build().dropdown({
        icon: "fa fa-list",
        text: "下拉",
        actions: [{
            text: "滚动提示",
            click: function () {
                portlet.alert("info", "滚动到我这！", 1000, true);
            }
        }, {
            type: "divider"
        }, {
            text: "portlet加载",
            click: function () {
                portlet.block("加载中");
            }
        }]
    });
    var portlet = element.build().portlet({
        id: "portlet_id",
        title: "我的标题",
        titleIcon: "fa fa-cogs font-green-sharp",
        render: col1,
        titleAction: [button, button2, dropdown, element.build().button({
            cls: "green-haze btn-circle",
            icon: "fa fa-close",
            text: "停止加载",
            iconPosition: "right",
            click: function () {
                portlet.unBlock();
            }
        })],
        scrollable: true,
        scrollHeight: 400,
        item: [alertDiv, h4, "aaaaaaaaaaaaa<br/><br/><br/><br/><br/><br/><br/>aaaaa"]
    }).note("warning", "提示", "这是提示示例");
    var portlet2 = element.build().portlet({
        id: "portlet2_id",
        title: "我的标题2",
        fullscreen: true,
        render: col2
    }).alert("warning", "警告", 2000);
});