/**
 * Created by Administrator on 2018/11/28.
 */
$(function(){
   $("header").load("header.html");
   $("footer").load("footer.html");
//人物
   var index = 0;
   function new_ajax(){
      var str = "";
      $.ajax({
         "url":"js/glz.json",
         "type":"get",
         "data":{},
         "async":false,
         "dataType":"json"
      }).done(function(result){
         var cont = result.data[index].list;
         //console.log(result);
         //console.log(cont);
         for (var i = 0; i < cont.length; i++) {
            str += `
            <li>
                <div class="check"></div>
                <img src="${cont[i].images}" alt="">
                <p>${cont[i].name}</p>
              </li>

            `
         }
       $(".zhti .shzt .ztcont ul").html(str);
      })
   }
   new_ajax();
   //绿  蓝   紫   橙  切换
   $(".ztnav li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      index = $(this).index();
      new_ajax();
   });
   //选中
   $(".zhti .shzt .ztcont ul").delegate("li", "click", function () {
      if ($(this).hasClass("active")) {
         $(this).removeClass("active");
      } else {
         if($(".fz-box ul li").size()<6){
            $(this).addClass("active");
            $(this).appendTo($(".xzt .fz-box ul"));
         }else {
            alert("最多只能选择六个阵灵参与搭配。");
         }
      }
   });
   //分享
   $(".to-fx").click(function () {
      $(".fx-list").toggle();
      return false;
   });
   //返回顶部
   $(window).scroll( function () {
      if($(window).scrollTop()>200){
         $(".to-top").stop().animate({"height":"66px"},50);
         //返回顶部
         $(".to-top").click(function () {
            $("body,html").animate({"scrollTop": "0px"},0);
         });
      }else {
         $(".to-top").stop().animate({"height":0},0);
      }
   });
});
