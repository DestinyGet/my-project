$(function() {
    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn(); //本质上这些动画最终的结果都是 display 属性none/block的切换
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function() {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名

        $(".floor .w").each(function(i, ele) { //滚动一次， 循环执行4次
            if ($(document).scrollTop() >= $(ele).offset().top) {
                console.log(i);
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

            }
        })


    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {

        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top

        //$(this).index() 这个索引号对应的是 外面具体内容的索引号，找到具体的是哪一个div，然后求他的offsetTop值
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})