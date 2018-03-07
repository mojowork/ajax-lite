/**
 *  a minimal ajax lib
 *  @author chaoshuai
 *  @data   2018/3/6
 */
(function(window) {
    // 主函数
    function ajax(options) {
        // 参数列表
        var url             = options.url       ||  '',
            method          = options.method    ||  'get',
            callback        = options.success   ||  function () {},
            callback2       = options.fail      ||  function () {},
            async           = options.async     ||  true;

        // XHR
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, async);
        xhr.send();

        // 监听
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if (xhr.status>=200&&xhr.status<300){
                    callback(xhr.responseText);
                } else {
                    callback2('出错了');
                }
            }
        }

    }
    window.ajax = ajax;
})(window);