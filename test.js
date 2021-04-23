// |_ systerm-router
// index.js
define(function(require, exports, module) {
    var SystermRouter = {

    };
    module.exports = SystermRouter;
});

//util.js
define(function(require, exports, module) {
    var Util = {
        /**
         * @param fileName [String|Array] 文件路径
         * 
         */
        fetchCfg: function(fileName, onload) {
            var Defer = $.Deferred();
            require.async(fileName, function(content) {

            });
        }
    };
    module.exports = Util;
});

hrbbData({

});

// |_ system-client-bury  // 系统埋点

// index.js 
define(function(require, exports, module) {
    /**
     *   描述：埋点模块
     *   eg.
     *       Bury.view('page_id_1'); // 埋点浏览事件调用方法
     *       Bury.click('ele_id_1'); // 埋点点击事件调用方法
     */

    var isAndroid = navigator.userAgent.match('Andorid');
    var jsonToStr = YT.JsonToStr;

    // 埋点预览页面配置
    var ViewPageCfg = {
        // 理财产品列表页面，点击理财列表每一项，埋点点击事件
        page_id_1: {
            title: '手机银行-理财产品列表',
            url: 'page/licaiMarket/moneyList.html'
        }
    };

    // 埋点点击元素配置
    var ClickElementCfg = {
        // 理财产品列表页面，点击理财列表每一项，埋点点击事件
        ele_id_1: {
            name: '理财产品列表项',
            title: '理财产品列表',
            url: 'page/licaiMarket/moneyList.html',
            target: 'page/licaiMarket/moneyDetail.html'
        }
    };

    // 埋点
    var Bury = {
        _clickElementCfg: ClickElementCfg,
        _viewPageCfg: ViewPageCfg,
        /**
         * 埋点-原生APP提供的-浏览事件
         * @param options [Object] 
         *   options.title 页面的 title  
         *   options.url 页面的 url
         */
        _app_view: function(options) {
            var property = {
                "eventCode": "_AppView", // 固定不变
                "eventProperty": {
                    "_title": options.title,
                    "_url": options.url
                }
            };
            if (isAndroid) {
                window.SysClientJs.hrbbData(jsonToStr(property));
            } else {
                setWebitEvent(jsonToStr(property), '800');
            };
        },
        /**
         * 埋点-原生APP提供的-点击事件
         * @param options [Object] 
         *   options.name 点击元素的名字
         *   options.title 点击元素所在页面的 title  
         *   options.url 点击元素所在页面的地址
         *   options.target 点击元素跳转地址
         */
        _app_click: function(options) {
            var property = {
                eventCode: "_AppClick", // 固定不变
                eventProperty: {
                    _element_name: option.name,
                    _title: options.title,
                    _url: options.url,
                    _element_target_url: options.target
                }
            };
            if (isAndroid) {
                window.SysClientJs.hrbbData(jsonToStr(property));
            } else {
                setWebitEvent(jsonToStr(property), '800');
            };
        },
        api: {
            view: function(pageId) {
                var this = Bury;
                var options = this._ViewPageCfg[pageId];
                if (!options) {
                    // 如果没有配置埋点点击元素，不处理
                    return;
                }
                this._app_view(options);
            },
            click: function(elementId) {
                var this = Bury;
                var options = this._ClickElementCfg[elementId];
                if (!options) {
                    // 如果没有配置埋点点击元素，不处理
                    return;
                }
                this._app_click(options);
            }
        }
    };
    module.exports = Bury.api;
});


xxx: function() {
    if (isAndroid) {
        android.xxx();
    } else {
        iphone.xxx();
    };
}