/**
 * Created by Administrator on 2018/11/28.
 */
$(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");
    //音乐播放
    var istrue = true;
    var player = $("#music");
    $(".main .music").click(function () {
        if (istrue) {
            $(this).removeClass("bf").addClass("tz");
            player.pause();

        } else {
            $(this).removeClass("tz").addClass("bf");
            player.play();
        }
        istrue = !istrue;
        return false;
    });

});