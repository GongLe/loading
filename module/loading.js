/**
 * Created with IntelliJ IDEA.
 * User: Gongle
 * Date: 13-7-9
 * Time: 下午2:59
 * 页面加载效果
 */
/**
 * <p>
 *  0: (Uninitialized) the send( ) method has not yet been invoked.
 1: (Loading) the send( ) method has been invoked, request in progress.
 2: (Loaded) the send( ) method has completed, entire response received.
 3: (Interactive) the response is being parsed.
 4: (Completed) the response has been parsed, is ready for harvesting.

 0 － （未初始化）还没有调用send()方法
 1 － （载入）已调用send()方法，正在发送请求
 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
 3 － （交互）正在解析响应内容
 4 － （完成）响应内容解析完成，可以在客户端调用了
 *     </p>
 * @param _callback
 */
var $$ready = function (_callback) {
    /in/.test(document.readyState) ? setTimeout('$$ready(' + _callback + ')', 9) : _callback()
}, $$remove = function (ele) {
    if (ele && ele.parentNode)
        ele.parentNode.removeChild(ele);
}

//移除loading效果
var loadingHide = function () {
    var _loading = document.getElementById('loading') , _loading_mask = document.getElementById('loading-mask')
    if (_loading) {//判断对象是否存在
        $$remove(_loading)
    }
    if (_loading_mask) {
        //删除元素
        $$remove(_loading_mask)
    }
}

$$ready(loadingHide);
