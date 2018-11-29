/**
 * Created by Administrator on 2018/11/29.
 */
$(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");

    function getUrl(name){
        var reg = new RegExp("(^|&)" + name + "=([^|&]*)(&|$)");
        var value = window.location.search.substring(1).match(reg);
        if (value == null) {
            return null
        } else {
            return value[2]
        }
    }
    $(".left .tab li.dj").click(function () {
        var index = $(this).index();
        window.location.href = "xqy.html?wjcc=" + index;
        return false;
    });
    var title = getUrl("wjcc");
    if (title) {
        $(".left .tab li").removeClass("active").eq(title).addClass("active");
        $(".right li").removeClass("active").eq(title - 1).addClass("active");
    }
});