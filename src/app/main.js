/**
 * Created by cgj on 2016/4/16.
 */
define(function (require) {

    var elementFactory = require("os-element");

    var breadcrumb = elementFactory.build().breadcrumb({
        preRender: "div.page-content > div.container",
        items: [{
            text: "Index",
            url: "#"
        }, {
            text: "Dashboard",
            active: true
        }]
    });

    var gridRow = elementFactory.build().row({
        render: "div.page-content > div.container",
        id: "grid_row_id"
    });
    var gridCol = elementFactory.build().col({
        id: "grid_row_id",
        span: "12",
        render: gridRow
    });
    var gridFactory = require("os-grid");
    gridFactory.build({
        render: gridCol
    });

    var row = elementFactory.build().row({
        render: $("div.page-content > div.container"),
        id: "row_id"
    });
    var col1 = elementFactory.build().col({
        id: "col_id",
        span: "6",
        render: row
    });
    var col2 = elementFactory.build().col({
        id: "col2_id",
        span: "6",
        render: row
    });
    var alertDiv = elementFactory.build().alert({
        id: "alert_id",
        type: "success",
        message: "成功",
        close: false
    });
    var h4 = $('<h4 class="block">Default Alerts</h4>');
    var button2 = elementFactory.build().button({
        cls: "btn-info",
        icon: "fa fa-user",
        loadAfterClick: true,
        loadText: "等待中...",
        text: "alertInfo",
        iconPosition: "right",
        click: function () {
            portlet.alert("info", "滚动到我这！", 1000, true);
            setTimeout(function () {
                button2.unload();
            }, 2000)
        }
    });
    var button = elementFactory.build().button({
        cls: "green-haze btn-circle",
        icon: "fa fa-check",
        text: "alertSuccess",
        click: function () {
            portlet.alert("success", "滚动到我这！", 1000, true);
            button2.enable();
        }
    });
    var dropdown = elementFactory.build().dropdown({
        icon: "fa fa-list",
        text: "下拉",
        cls: "btn-info",
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
    var portlet = elementFactory.build().portlet({
        id: "portlet_id",
        title: "我的标题",
        titleIcon: "fa fa-cogs font-green-sharp",
        render: col1,
        titleAction: [button, dropdown, elementFactory.build().button({
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
        item: [button2, alertDiv, h4, "aaaaaaaaaaaaa<br/><br/><br/><br/><br/><br/><br/>aaaaa"]
    }).note("warning", "提示", "这是提示示例");
    var portlet2 = elementFactory.build().portlet({
        id: "portlet2_id",
        title: "我的标题2",
        fullScreen: true,
        render: col2
    }).warning("警告");
});