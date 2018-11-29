/**
 * Created by Administrator on 2018/11/14.
 */
$(function () {
    $("header").load("header.html");
    $("footer").load("footer.html");
    //最新  新闻  选项卡
    var t_nav = 0;
    var page = 0;
    function new_ajax() {
        var str = ``;
        $.ajax({
            "url": "js/new.json",
            "type": "get",
            "data": {},
            "async": false,
            "dataType": "json"
        }).done(function (result) {
            var con = result["pages" + page].data[t_nav].list;
            //console.log(con);
            for (var i = 0; i < con.length; i++) {
                str += `<li>
                            <a href="">${con[i].title}
                                <span>${con[i].time}</span>
                            </a>
                        </li>`;
            }
            $(".new-list ul").html(str);
        });
    }
    new_ajax();
    ////点击回到顶部
    $(".to-top a").click(function () {
        $("body,html").animate({"scrollTop": "0px"});
        return false;
    });
    //点击切换选项卡
    $(".new-tab .tab-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        t_nav = $(this).attr("option");
        new_ajax();
    });
    //点击切换页数
    $(".new-page span").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        page = $(this).attr("page");
        new_ajax();
    });
    //点击上一页
    $(".new-page .prev").click(function () {
        if (page > 0) {
            page--;
            new_ajax();
        }else {
            return false;
        }
        $(".new-page span").removeClass("active").eq(page).addClass("active");
        return false;
    });
    //点击下一页
    $(".new-page .next").click(function () {
        if (page < 3) {
            page++;
            console.log(page);
            new_ajax();
        }else {
            return false;
        }
        $(".new-page span").removeClass("active").eq(page).addClass("active");
        return false;
    });
});